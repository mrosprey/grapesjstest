export default (editor, config = {}) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  
    domc.addType('container', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                // Traits (Settings)
                traits: [{
                    type: 'select',
                    label: 'Fluid',
                    name: 'class',
                    options: [
                        { value: 'container', name: 'No' },
                        { value: 'container-fluid', name: 'Yes' },
                    ]
                }]
            })
        },
        {
            isComponent: function(el) {
                if(el.tagName == 'DIV' && el.className == 'container'){
                    return {type: 'container'};
                }
            },
        }),

        // Define the View
        view: defaultType.view
    });

    domc.addType('columns', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                // Traits (Settings)
                traits: [
                    {
                        type: 'select',
                        label: 'LG Columns',
                        name: 'class',
                        options: [
                            { value: 'col-lg-1', name: '1' },
                            { value: 'col-lg-2', name: '2' },
                            { value: 'col-lg-3', name: '3' },
                            { value: 'col-lg-4', name: '4' },
                            { value: 'col-lg-5', name: '5' },
                            { value: 'col-lg-6', name: '6' },
                            { value: 'col-lg-7', name: '7' },
                            { value: 'col-lg-8', name: '8' },
                            { value: 'col-lg-9', name: '9' },
                            { value: 'col-lg-10', name: '10' },
                            { value: 'col-lg-11', name: '11' },
                            { value: 'col-lg-12', name: '12' },
                        ]
                    },
                    {
                        type: 'select',
                        label: 'MD Columns',
                        name: 'class',
                        options: [
                            { value: 'col-md-1', name: '1' },
                            { value: 'col-md-2', name: '2' },
                            { value: 'col-md-3', name: '3' },
                            { value: 'col-md-4', name: '4' },
                            { value: 'col-md-5', name: '5' },
                            { value: 'col-md-6', name: '6' },
                            { value: 'col-md-7', name: '7' },
                            { value: 'col-md-8', name: '8' },
                            { value: 'col-md-9', name: '9' },
                            { value: 'col-md-10', name: '10' },
                            { value: 'col-md-11', name: '11' },
                            { value: 'col-md-12', name: '12' },
                        ]
                    },
                    {
                        type: 'select',
                        label: 'SM Columns',
                        name: 'class',
                        options: [
                            { value: 'col-sm-1', name: '1' },
                            { value: 'col-sm-2', name: '2' },
                            { value: 'col-sm-3', name: '3' },
                            { value: 'col-sm-4', name: '4' },
                            { value: 'col-sm-5', name: '5' },
                            { value: 'col-sm-6', name: '6' },
                            { value: 'col-sm-7', name: '7' },
                            { value: 'col-sm-8', name: '8' },
                            { value: 'col-sm-9', name: '9' },
                            { value: 'col-sm-10', name: '10' },
                            { value: 'col-sm-11', name: '11' },
                            { value: 'col-sm-12', name: '12' },
                        ]
                    },
                    {
                        type: 'select',
                        label: 'XS Columns',
                        name: 'class',
                        options: [
                            { value: 'col-xs-1', name: '1' },
                            { value: 'col-xs-2', name: '2' },
                            { value: 'col-xs-3', name: '3' },
                            { value: 'col-xs-4', name: '4' },
                            { value: 'col-xs-5', name: '5' },
                            { value: 'col-xs-6', name: '6' },
                            { value: 'col-xs-7', name: '7' },
                            { value: 'col-xs-8', name: '8' },
                            { value: 'col-xs-9', name: '9' },
                            { value: 'col-xs-10', name: '10' },
                            { value: 'col-xs-11', name: '11' },
                            { value: 'col-xs-12', name: '12' },
                        ]
                    }
                ]
            })
        },
        {
            isComponent: function(el) {
                if(el.tagName == 'DIV' && el.className == 'col-lg-1 col-md-1 col-sm-1 col-xs-1'){
                    return {type: 'columns'};
                }
            },
        }),

        // Define the View
        view: defaultType.view
    });

    domc.addType('header', {
        // Define the Model
        model: defaultModel.extend({
            // Extend default properties
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                // Traits (Settings)
                traits: [
                    {
                        type: 'select',
                        label: 'Size',
                        name: 'tagName',
                        changeProp: 1,
                        options: [
                            { value: 'h1', name: 'H1' },
                            { value: 'h2', name: 'H2' },
                            { value: 'h3', name: 'H3' },
                            { value: 'h4', name: 'H4' },
                            { value: 'h5', name: 'H5' },
                            { value: 'h6', name: 'H6' },
                        ]
                    }
                ],
                editable: true
            }),
            init() {
                this.listenTo(this, 'change:tagName', this.tagUpdated);
            },
            tagUpdated() {
                const coll = this.collection;
                const at = coll.indexOf(this);
                coll.remove(this);
                coll.add(this, { at });
            }
        },
        {
            isComponent: function(el) {
                if(el && ['H1','H2','H3','H4','H5','H6'].includes(el.tagName)){
                    return {type: 'header'};
                }
            },
        }),

        // Define the View
        view: defaultType.view
    });
}
