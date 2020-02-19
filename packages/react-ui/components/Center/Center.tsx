import React from 'react';

import { Override } from '../../typings/utility-types';

import styles from './Center.module.less';

export type HorizontalAlign = 'left' | 'center' | 'right';

export type CenterProps = Override<
  React.HTMLAttributes<HTMLDivElement>,
  {
    /**
     * Горизонтальное выравнивание контента.
     */
    align?: HorizontalAlign;

    /**
     * **Используй с осторожностью!**
     * Дополнительные стили
     */
    style?: React.CSSProperties;
  }
>;

/**
 * Контейнер для вертикального центрирования. В компонент можно передавать
 * свойства как в любой *div* (кроме `className`)
 */
export class Center extends React.Component<CenterProps> {
  public static __KONTUR_REACT_UI__ = 'Center';

  public static defaultProps = {
    align: 'center',
  };

  public render(): JSX.Element {
    const { align, style, children, ...rest } = this.props;

    const styleJoined = Object.assign({ textAlign: align }, style);

    return (
      <div className={styles.root} {...rest} style={styleJoined}>
        <span className={styles.spring} />
        <span className={styles.container}>{children}</span>
      </div>
    );
  }
}