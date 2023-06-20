/*
/!*
import {
  forwardRef,
  ComponentPropsWithoutRef,
  ElementType,
  MutableRefObject,
  JSXElementConstructor,
  DetailedHTMLProps,
  SVGProps,
  HTMLAttributes,
  RefAttributes,
  ForwardedRef,
  FC,
  PropsWithoutRef
} from 'react';

type DynamicTagOwnProps<N extends ElementType = ElementType> = {
  tagName: N;
};

type DynamicTagProps<N extends ElementType = ElementType> = DynamicTagOwnProps<N> &
  Omit<ComponentPropsWithoutRef<N>, keyof DynamicTagOwnProps>;

type ComponentInstance<T extends ElementType> = T extends JSXElementConstructor<any>
  ? T
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T] extends DetailedHTMLProps<HTMLAttributes<unknown>, infer IHTMLElement>
    ? IHTMLElement
    : JSX.IntrinsicElements[T] extends SVGProps<infer ISVGElement>
    ? ISVGElement
    : never
  : never;

type TestA = ComponentInstance<'a'>;
type TestDiv = ComponentInstance<'div'>;
type TestSVG = ComponentInstance<'svg'>;
type TestCircle = ComponentInstance<'circle'>;

export const DynamicTag = forwardRef(
  ({tagName}: DynamicTagProps, ref: ForwardedRef<ComponentInstance<DynamicTagProps['tagName']>>) => {
    const TagName = tagName || 'span';
    return <TagName ref={ref}>123</TagName>;
  }
);

export const testDT: FC = () => {
  return <DynamicTag tagName="span" href="#" />;
};
*!/

import React, {forwardRef, useRef} from 'react';
import type {
  ElementType,
  ReactElement,
  JSXElementConstructor,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef
} from 'react';

// Inspired by:
// https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/

// https://github.com/emotion-js/emotion/blob/f3c51e8aca287170e43110bee2e4527eacfcada4/packages/react/types/helper.d.ts
export type PropsOf<C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<
  C,
  ComponentPropsWithoutRef<C>
>;

type TagProp<C extends ElementType> = {
  /!**
   * An override of the default HTML tag.
   * Can also be another React component.
   *!/
  tag?: C;
};

/!**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 *!/
export type ExtendableProps<ExtendedProps = object, OverrideProps = object> = OverrideProps &
  Omit<ExtendedProps, keyof OverrideProps>;

/!**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 *!/
export type InheritableElementProps<C extends ElementType, Props = object> = ExtendableProps<PropsOf<C>, Props>;

/!**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included
 *!/
export type PolymorphicComponentProps<C extends ElementType, Props = object> = InheritableElementProps<
  C,
  Props & TagProp<C>
>;

/!**
 * Utility type to extract the `ref` prop from a polymorphic component
 *!/
export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

/!**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component
 *!/
export type PolymorphicComponentPropsWithRef<C extends ElementType, Props = object> = PolymorphicComponentProps<
  C,
  Props
> & {ref?: PolymorphicRef<C>};

interface PolymorphicComponentWithRef<DefaultTag extends ElementType, Props = object> {
  <C extends ElementType = DefaultTag>(props: PolymorphicComponentPropsWithRef<C, Props>): ReactElement | null;
  propTypes?: React.WeakValidationMap<PolymorphicComponentPropsWithRef<DefaultTag, Props>> | undefined;
  contextTypes?: React.ValidationMap<any> | undefined;
  defaultProps?: Partial<PolymorphicComponentPropsWithRef<DefaultTag, Props>> | undefined;
  displayName?: string | undefined;
}

// ****************************************
// Sample usage:

type PolymorphicComponentExampleProps = {
  polyRequiredProp?: 'example' | 'prop';
  polyProp?: 'some' | 'prop';
};

const PolymorphicComponentExample: PolymorphicComponentWithRef<ElementType, PolymorphicComponentExampleProps> =
  forwardRef(
    <C extends ElementType = 'span'>(
      props: PolymorphicComponentProps<C, PolymorphicComponentExampleProps>,
      ref?: PolymorphicRef<C>
    ) => {
      const {tag: Tag = 'span', polyRequiredProp, ...other} = props;
      console.log('test', polyRequiredProp === 'example');
      return <Tag {...other} ref={ref} />;
    }
  );

PolymorphicComponentExample.displayName = 'PolymorphicComponentExample';

// ****************************************
// TESTS:

// Passed
const TestDefaultTag = () => {
  return <PolymorphicComponentExample polyRequiredProp="prop" data-testid="anything" />;
};

// Passed
const TestMissingRequiredProp = () => {
  return <PolymorphicComponentExample tag="a" href="#" />;
};

// *************************************
// tag = 'div'

// Passed
const TestSimpleDiv = () => (
  <PolymorphicComponentExample polyRequiredProp="prop" tag="a" href="#" aria-expanded>
    <div />
  </PolymorphicComponentExample>
);

// Passed
const TestSimpleDivRef = () => {
  const testRef = useRef<HTMLDivElement>(null);
  return <PolymorphicComponentExample polyRequiredProp="prop" tag="div" ref={testRef} />;
};

// Passed
const TestSimpleDivWrongRef = () => {
  const testRef = useRef<HTMLDivElement>(null);
  return <PolymorphicComponentExample polyRequiredProp="prop" tag="div" ref={testRef} />;
};
*/
