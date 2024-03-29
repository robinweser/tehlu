import * as React from 'react'

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type AlignItems =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'
type AlignSelf =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'start'
  | 'end'
  | 'unset'
type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
type Display =
  | 'none'
  | 'flex'
  | 'grid'
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'contents'
  | 'list'
  | 'list-item'
type Size = number | string
type Responsive<T> = T | (T | undefined)[]

declare module '@tehlu/system' {
  // TODO: add proper types
  type System = any
  type Plugin = (style: Style) => Style

  type Fallback = {
    property: string | Array<string>
    values: Array<string>
    match?: string
  }

  type Options = {
    baselineGrid?: number
    plugins?: Array<Plugin>
    hooks: any
    fallbacks?: Array<Fallback>
    typography?: Object
  }

  export function createSystem(options: Options): System
  export function StyleSheet(): JSX.Element

  type ProviderProps = {
    system: System
    children: React.ReactNode
  }
  export function Provider(props: ProviderProps): JSX.Element

  type Style = Object

  type ElProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> & {
    children?: React.ReactNode
    as?: React.ReactNode | string | React.Component
    style?: Style | Array<Style>
  }

  export function El(props: ElProps): JSX.Element

  type BoxProps = {
    children?: React.ReactNode
    bg?: Responsive<string>
    height?: Responsive<Size>
    minHeight?: Responsive<Size>
    width?: Responsive<Size>
    minWidth?: Responsive<Size>
    maxWidth?: Responsive<Size>
    direction?: Responsive<Direction>
    alignItems?: Responsive<AlignItems>
    alignSelf?: Responsive<AlignSelf>
    justifyContent?: Responsive<JustifyContent>
    gap?: Responsive<Size>
    padding?: Responsive<Size>
    paddingInline?: Responsive<Size>
    paddingBlock?: Responsive<Size>
    paddingTop?: Responsive<Size>
    paddingRight?: Responsive<Size>
    paddingBottom?: Responsive<Size>
    paddingLeft?: Responsive<Size>
    margin?: Responsive<Size>
    marginInline?: Responsive<Size>
    marginBlock?: Responsive<Size>
    marginTop?: Responsive<Size>
    marginRight?: Responsive<Size>
    marginBottom?: Responsive<Size>
    marginLeft?: Responsive<Size>
    marginHeight?: Responsive<Size>
    marginWidth?: Responsive<Size>
    maxHeight?: Responsive<Size>
    display?: Responsive<Display>
    wrap?: string
    grow?: Responsive<number>
    shrink?: Responsive<number>
    basis?: Responsive<Size>
    flex?: number
    order?: Responsive<number>
  } & ElProps
  export function Box(props: BoxProps): JSX.Element

  type GridProps = {
    children?: React.ReactNode
    columns?: Responsive<Size>
    gap?: Responsive<Size>
    areas?: Responsive<Size>
  } & ElProps
  export function Grid(props: GridProps): JSX.Element

  type SpacerProps = {
    size?: Responsive<Size>
  } & BoxProps
  export function Spacer(props: SpacerProps): JSX.Element

  type TextProps = {
    variant?: string
    color?: Responsive<string>
    weight?: Responsive<Size>
    align?: Responsive<'left' | 'center' | 'right'>
    decoration?: Responsive<'underline' | 'strike-through' | 'none'>
    size?: Responsive<Size>
    height?: Responsive<Size>
  } & ElProps
  export function Text(props: TextProps): JSX.Element

  type ClickButtonProps = {
    action: (e: React.MouseEvent<HTMLButtonElement>) => void
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }
  type ClickLinkProps = { action: string | Object; target?: string }
  type ClickProps = (ClickButtonProps | ClickLinkProps) & ElProps
  export function Click(props: ClickProps): JSX.Element

  type OverlayProps = {
    visible: boolean
    zIndex: number
    top?: Responsive<Size>
    right?: Responsive<Size>
    bottom?: Responsive<Size>
    left?: Responsive<Size>
    inset?: Responsive<Size>
  } & BoxProps
  export function Overlay(props: OverlayProps): JSX.Element
}
