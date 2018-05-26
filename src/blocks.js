export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  
    bm.add('container', {
        category: 'CSS',
        label: 'Container',
        attributes: { class: 'fa fa-columns', title: 'Container' },
        content: '<div class="container"></div>'
    });

    bm.add('row', {
        category: 'CSS',
        label: 'Row',
        attributes: { class: 'fa fa-columns', title: 'Row' },
        content: '<div class="row"></div>'
    });

    bm.add('columns', {
        category: 'CSS',
        label: 'Columns',
        attributes: { class: 'fa fa-columns', title: 'Row' },
        content: '<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>'
    });

    bm.add('header', {
        category: 'CSS',
        label: 'Text',
        attributes: { class: 'fa fa-header', title: 'Header' },
        content: {
            content: 'Insert header text here',
            type: 'header',
            activeOnRender: 1
        }
    });
}
