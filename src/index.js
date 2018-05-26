import grapesjs from 'grapesjs';
import loadTraits from './traits';
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('gjs-my-component', (editor, opts = {}) => {
  const options = { ...{
    // default options
  },  ...opts };

  editor.addComponents(`
    <style>
        .container,
        .container-fluid,
        .row,
        [class^="col-"] {
            min-height: 100px !important;
        }

        .row {
            padding: 30px;
        }
    </style>
  `);

  loadTraits(editor, options);
  loadComponents(editor, options);
  loadBlocks(editor, options);

  // TODO Remove
  // editor.on('load', () => editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 }))
});
