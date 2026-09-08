'use client';

import type { ReactNode } from 'react';
import { useIsClient } from '@/hooks/useIsClient';

export function ClientOnly({
    children,
    fallback = null,
}: {
    children: ReactNode;
    fallback?: ReactNode;
}) {
    const isClient = useIsClient();
    return isClient ? <>{children}</> : <>{fallback}</>;
}