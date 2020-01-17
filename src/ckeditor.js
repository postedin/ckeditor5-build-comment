/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';

export default class CommentEditor extends ClassicEditorBase {
  constructor(...args) {
    super(...args);

    this.on('ready', () => {
      this.ui.view.top.remove(0);
    });
  }
}

// Plugins to include in the build.
CommentEditor.builtinPlugins = [Essentials, Autoformat, Bold, Italic, BlockQuote, Link, Paragraph, Code];

// Editor configuration.
CommentEditor.defaultConfig = {
  toolbar: false,
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
};
