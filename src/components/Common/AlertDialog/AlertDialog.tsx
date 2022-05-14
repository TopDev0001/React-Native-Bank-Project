import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';
import { X, Check } from 'react-feather';
import './AlertDialog.sass';
import { IAlertDialog, IPolymorphicDialogContent } from './types';
import { Ibutton } from '../Button/types';
import Button from '../Button/Button';

export const AlertDialog: React.FC<IAlertDialog> = ({ children, ...props }) => (
  <AlertDialogPrimitive.Root {...props}>
    <AlertDialogPrimitive.Overlay className="dialog-overlay" />
    {children}
  </AlertDialogPrimitive.Root>
);

export const AlertDialogContent = React.forwardRef(
  (
    {
      size = 'small', align = 'left', tone = 'none', children, ...props
    },
    forwardedRef
  ) => (
    <AlertDialogPrimitive.Content
      {...props}
      className={clsx(
        'dialog-content',
        size && `size-${size}`,
        align && `align-${align}`,
        tone && `tone-${tone}`
      )}
      ref={forwardedRef}
      // Don't close the Alert Dialog when pressing ESC
      // tslint:disable-next-line: jsx-no-lambda
      onEscapeKeyDown={(event) => event.preventDefault()}
      // Don't close the Alert Dialog when clicking outside
      // tslint:disable-next-line: jsx-no-lambda
      onPointerDownOutside={(event) => event.preventDefault()}
    >
      {children}
    </AlertDialogPrimitive.Content>
  )
) as IPolymorphicDialogContent;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogTitle = (props: { children: React.ReactNode }) => (
  <AlertDialogPrimitive.Title className="dialog-title">
    {props.children}
  </AlertDialogPrimitive.Title>
);
export const AlertDialogDescription = (props: {
  className?: string;
  children: React.ReactNode;
}) => (
  <AlertDialogPrimitive.Description
    className={clsx('dialog-text', props.className && props.className)}
  >
    {props.children}
  </AlertDialogPrimitive.Description>
);

export const AlertDialogCancel = (props: Ibutton) => {
  const { children, ...rest } = props;
  return (
    <Button className="is-pill" {...rest}>
      <X />
      {props.children}
    </Button>
  );
};

export const AlertDialogAction = (props: Ibutton) => {
  const { children, ...rest } = props;
  return (
    <Button className="is-pill is-green" {...rest}>
      <Check />
      {props.children}
    </Button>
  );
};
