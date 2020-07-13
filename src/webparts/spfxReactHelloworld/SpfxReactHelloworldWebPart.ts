import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxReactHelloworldWebPartStrings';
import SpfxReactHelloworld from './components/SpfxReactHelloworld';
import { ISpfxReactHelloworldProps } from './components/ISpfxReactHelloworldProps';

export interface ISpfxReactHelloworldWebPartProps {
  description: string;
}

export default class SpfxReactHelloworldWebPart extends BaseClientSideWebPart <ISpfxReactHelloworldWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxReactHelloworldProps> = React.createElement(
      SpfxReactHelloworld,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
