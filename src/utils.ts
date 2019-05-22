
/* IMPORT */

import * as _ from 'lodash';
import {Options} from './types';

/* UTILS */

const Utils = {

  escapeBackticks ( str: string ): string {

    return str.replace ( '`', '\\`' );

  },

  minify ( template: string ): string {

    return template.trim ().replace ( />\n\s*</gm, '><' );

  },

  render ( template: string, options: Options ): string {

    const {templateOptions} = options;

    template = options.minify ? Utils.minify ( template ) : template;

    const templateFn = _.template ( template, templateOptions );

    if ( !options.data ) return templateFn.toString ();

    const html = Utils.escapeBackticks ( templateFn ( options.data ) );

    return `\`${html}\``;

  }

};

/* EXPORT */

export default Utils;
