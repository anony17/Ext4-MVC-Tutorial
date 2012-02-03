unit main; 

{$mode objfpc}{$H+}

interface

uses
  SysUtils, Classes, httpdefs, fpHTTP, fpWeb, fpjson;

type

  { TFPWebModule1 }

  TFPWebModule1 = class(TFPWebModule)
    procedure getCustomerListRequest(Sender: TObject; ARequest: TRequest;
      AResponse: TResponse; var Handled: Boolean);
    procedure loginRequest(Sender: TObject; ARequest: TRequest;
      AResponse: TResponse; var Handled: Boolean);
  private
    { private declarations }
  public
    { public declarations }
  end; 

var
  FPWebModule1: TFPWebModule1; 

implementation

{$R *.lfm}

{ TFPWebModule1 }

procedure TFPWebModule1.getCustomerListRequest(Sender: TObject;
  ARequest: TRequest; AResponse: TResponse; var Handled: Boolean);
var
  lJSON: TJSONObject;
  lJSONArray: TJSONArray;
  lJSONItem: TJSONObject;
begin
  lJSON := TJSONObject.Create;
  lJSONArray := TJSONArray.Create;
  try
    lJSONItem := TJSONObject.Create;
    lJSONItem.Add('Id', 1);
    lJSONItem.Add('Name', 'Perez, Juan');
    lJSONItem.Add('Sales', 123.4);
    lJSONArray.Add(lJSONItem);

    lJSONItem := TJSONObject.Create;
    lJSONItem.Add('Id', 2);
    lJSONItem.Add('Name', 'Gomez, Elisa');
    lJSONItem.Add('Sales', 43.2);
    lJSONArray.Add(lJSONItem);

    lJSON.Arrays['root'] := lJSONArray;

    AResponse.Content := lJSON.AsJSON;
  finally
    lJSON.Free;
  end;
  Handled := True;
end;

procedure TFPWebModule1.loginRequest(Sender: TObject; ARequest: TRequest;
  AResponse: TResponse; var Handled: Boolean);
var
  lJSON: TJSONObject;
begin
  lJSON := TJSONObject.Create;
  try
    // user is registered?
    if (ARequest.ContentFields.Values['user'] = 'demo') and (ARequest.ContentFields.Values['password'] = 'demo') then
    begin
      lJSON.Add('success', true);
      lJSON.Add('msg', 'Logged in!');
    end
    else
    begin
      lJSON.Add('success', false);
      lJSON.Add('msg', 'User or Password is not correct.');
    end;

    AResponse.Content := lJSON.AsJSON;
  finally
    lJSON.Free;
  end;
  Handled := True;
end;

initialization
  RegisterHTTPModule('LoginHandler', TFPWebModule1);
end.

