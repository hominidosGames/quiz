import { Storage } from '@ionic/storage';

export class LocalStorage {
    private storage: Storage;

    constructor() {
        this.storage = new Storage();
    }

    public async init() {
        try {
            await this.storage.create();
        } catch (e) {
            console.log(`Error al inicializar la base de datos: ${e}`);
        }
    }

    public async save(key: string, value: string) {
        try {
            await this.storage.set(key, value);
        } catch (e) {
            console.log(`Error al salvar en base de datos: ${e}`);
        }
    }

    public async load(key: string) {
        try {
            return await this.storage.get(key);
        } catch (e) {
            console.log(`Error al cargar de la base de datos: ${e}`);
        }
    }

    public async clear() {
        try {
            await this.storage.clear();
        } catch (e) {
            console.log(`Error al reiniciar la base de datos: ${e}`);
        }
    }
}