import { Storage } from '@ionic/storage';

export class LocalStorage {
    private static storage: Storage;
    
    public static async init() {
        try {
            LocalStorage.storage = new Storage();
            await LocalStorage.storage.create();
            console.log(`Base de datos inicializada`);
        } catch (e) {
            console.log(`Error al inicializar la base de datos: ${e}`);
        }
    }

    public static async save(key: string, value: string) {
        try {
            if (!LocalStorage.storage) await LocalStorage.init();
            await LocalStorage.storage.set(key, value);
        } catch (e) {
            console.log(`Error al salvar en base de datos: ${e}`);
        }
    }

    public static async load(key: string) {
        try {
            if (!LocalStorage.storage) await LocalStorage.init();
            return await LocalStorage.storage.get(key);
        } catch (e) {
            console.log(`Error al cargar de la base de datos: ${e}`);
        }
    }

    public static async clear() {
        try {
            if (!LocalStorage.storage) await LocalStorage.init();
            await LocalStorage.storage.clear();
        } catch (e) {
            console.log(`Error al reiniciar la base de datos: ${e}`);
        }
    }
}