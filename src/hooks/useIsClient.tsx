'use client';

import { useSyncExternalStore } from 'react';

export function useIsClient() {
    return useSyncExternalStore(
        () => () => { },   // no subscription needed
        () => true,        // client snapshot
        () => false        // server snapshot
    );
}