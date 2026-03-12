"use client";

import * as React from "react";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

interface ResponsiveModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
}

export const ResponsiveModal = React.forwardRef<
  HTMLDivElement,
  ResponsiveModalProps
>(
  (
    {
      open,
      onOpenChange,
      children,
      trigger,
      title,
      description,
    },
    ref
  ) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (!isDesktop) {
      return (
        <Dialog open={open} onOpenChange={onOpenChange}>
          {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
          <DialogContent
            ref={ref}
            className="w-full max-w-full bottom-0 top-auto left-0 right-0 translate-x-0 translate-y-0 rounded-t-lg"
          >
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
            {children}
          </DialogContent>
        </Dialog>
      );
    }

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent ref={ref}>
          {title && (
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>
          )}
          {children}
        </DialogContent>
      </Dialog>
    );
  }
);

ResponsiveModal.displayName = "ResponsiveModal";
