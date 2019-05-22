
/* IMPORT */

import Utils from './utils';

/* COMPILE */

//TODO: Maybe add support for things like 'lodash.template`my template`'

function compile ({ types }) {

  return {

    visitor: {

      CallExpression ( path, { opts } ) {

        const {node} = path;

        if ( !node.callee.property || node.callee.property.name !== 'template' ) return;
        if ( !['lodash', '_'].includes ( node.callee.object.name ) ) return;
        if ( node.arguments.length !== 1 ) return;

        const arg = node.arguments[0];

        let template;

        if ( types.isStringLiteral ( arg ) ) {

          template = arg.value;

        } else if ( types.isTemplateLiteral ( arg ) ) {

          template = arg.quasis.map ( quasi => quasi.value.cooked ).join ( '' );

        } else {

          return;

        }

        const compiled = Utils.render ( template, opts );

        path.replaceWithSourceString ( compiled );

      }

    }

  };

}

/* EXPORT */

export default compile;
