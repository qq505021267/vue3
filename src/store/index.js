import { provideStore as provideUserStore } from './useLoginUser'

export default function provideStore(app) {
    provideUserStore(app);
}

