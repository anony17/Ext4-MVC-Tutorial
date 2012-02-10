/*
 * File: app/view/ui/CustomerDataForm.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Designer does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DEMO.view.ui.CustomerDataForm', {
    extend: 'Ext.form.Panel',

    autoShow: false,
    autoRender: false,
    draggable: true,
    floating: true,
    id: 'frmCustomer',
    bodyPadding: 10,
    closable: true,
    title: 'Customer Data',
    modal: true, 
    frame: true,
    closeAction: 'destroy',
    url: '/cgi-bin/extdesigner/extjshandler.cgi/CustomerData/update',
    initComponent: function() {
        var me = this;

        me.initialConfig = Ext.apply({
            url: '/cgi-bin/extdesigner/extjshandler.cgi/CustomerData/update'
        }, me.initialConfig);


        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    name: 'Id',
                    fieldLabel: 'Id',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'Name',
                    fieldLabel: 'Name',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'Sales',
                    fieldLabel: 'Sales',
                    anchor: '100%'
                }
            ]
        });

        me.callParent(arguments);
    },
  buttons: [
    {
      text: "Submit",
      type: "submit",
      action: "submit",
      formBind: true
    },
    {
      text: "Cancel",
      type: "button",
      action: "cancel",
      formBind: true
    }
  ]

});