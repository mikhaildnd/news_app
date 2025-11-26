declare global {
    namespace Cypress {
        interface Chainable {
            mount(
                component: React.ReactNode,
                options?: MountOptions,
            ): Chainable<MountReturn>;
        }
    }
}

export {};
