// Copyright (c) lithium0003
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import { MODULE_NAME, MODULE_VERSION } from './version';

import { load_jsme } from './jsme/jsme.nocache';

declare global {
  interface Window {
    JSApplet: any
    jsme: any
    jsmeOnLoad(): void
  }
}

window.jsmeOnLoad = ()=>{};
window.jsme = {};
window.jsme.succeeded = load_jsme();

export class SmilesEditorWidgetView extends DOMWidgetView {
  private smiles_input: HTMLDivElement;
  private smiles_display: HTMLDivElement;
  private jsmeApplet: any = null;

  render() {
    super.render();
    this.smiles_input = document.createElement('div');
    this.smiles_input.id = "jsme_container";
    this.smiles_display = document.createElement('div');
    this.smiles_display.textContent="SMILES : ";
    this.el.appendChild(this.smiles_display);
    this.el.appendChild(this.smiles_input);

    if(window.jsme.succeeded) {
      setTimeout(this.create_callback, 500);
    }
    else {
      window.jsmeOnLoad = this.create_callback;
    }
  }

  public create_callback = () => { 
      var param: any = {};
      if (this.model.get('smiles')) {
        param = {"smiles" : this.model.get('smiles')};
      }
      else if(this.model.get('mol')) {
        param = {"mol" : this.model.get('mol')};                    
      }
      this.jsmeApplet = new window.JSApplet.JSME("jsme_container", "480px", "480px",  param);
      this.jsmeApplet.setCallBack("AfterStructureModified", (x: any)=>this.changeFunc());
    }

  changeFunc() {
    let smiles = this.jsmeApplet.smiles();
    let mol = this.jsmeApplet.molFile();
    this.smiles_display.textContent="SMILES : "+smiles;
    this.model.set('smiles', smiles);
    this.model.set('mol', mol);
    this.model.save_changes();
  }
}

export class SmilesEditorWidgetModel extends DOMWidgetModel {
  static model_name = 'SmilesEditorWidgetModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'SmilesEditorWidgetView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;

  defaults() {
    return {
      ...super.defaults(),
      _model_name: SmilesEditorWidgetModel.model_name,
      _model_module: SmilesEditorWidgetModel.model_module,
      _model_module_version: SmilesEditorWidgetModel.model_module_version,
      _view_name: SmilesEditorWidgetModel.view_name,
      _view_module: SmilesEditorWidgetModel.view_module,
      _view_module_version: SmilesEditorWidgetModel.view_module_version,
      smiles: '',
      mol: '',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };
}
