/*
 * File: app/controller/Login.js
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

Ext.define('MyApp.controller.Login', {
    extend: 'Ext.app.Controller',

    stores: [
        
    ],
    views: [
        'LoginForm',
        'MainToolbar'
    ],
    init: function() {
        this.control({
            "loginform button[id=btnSubmit]": {
                click: this.onLoginClick
            },
            "maintoolbar button[id=btnLogout]": {
                click: this.onLogoutClick
            }
        });
    },

    onLoginClick: function(button, e, options) {
        var win = button.up('loginform');
        var frm = win.getForm();
        frm.submit({
            success: function(form, action){
                var UserController = this.getController('MyApp.controller.User');
                this.getController('MyApp.controller.Main').showMainView();
                UserController.saveSession(); 
                win.destroy();
            },
            failure: function(form, action){
                switch(action.failureType){
                    case Ext.form.Action.CLIENT_INVALID:
                    Ext.Msg.alert('Failure', 'Please complete the required fields.');
                    break;
                    case Ext.form.Action.CONNECT_FAILURE:
                    Ext.Msg.alert('Failure', 'Ajax communication failed.');
                    break;
                    case Ext.form.Action.SERVER_INVALID:
                    Ext.Msg.alert('Failure', action.result.msg);
                    break;                
                }
            },
            scope: this
        });
    },

    onLogoutClick: function(button, e, options) {
        this.getController('MyApp.controller.Main').destroyAll();
        this.getController('MyApp.controller.User').deleteSession(); 
        Ext.create('MyApp.view.LoginForm', {}).show();


    },

    onControllerClickStub: function() {

    }

});