import * as React from 'react';
import styles from './SpfxReactHelloworld.module.scss';
import { ISpfxReactHelloworldProps } from './ISpfxReactHelloworldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpfxReactHelloworld extends React.Component<ISpfxReactHelloworldProps, {}> {
  public render(): React.ReactElement<ISpfxReactHelloworldProps> {
    return (
      <div className={ styles.spfxReactHelloworld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
