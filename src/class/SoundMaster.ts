// IMPORTANTE la rutas donde dejar los archivos de audio son las siguientes:
// Android: /android/app/src/main/assets/archivo.mp3
// Web: /assets/sounds/archivo.mp3
// iOS: /ios/App/App/public/assets/archivo.mp3

import { NativeAudio } from '@capacitor-community/native-audio';

export class SoundMaster {
    constructor() { }

    public async preload(titlesSounds: string[]) {
        titlesSounds.forEach(title => {
            NativeAudio.preload({
                assetId: title,
                assetPath: `${title}.mp3`,
                audioChannelNum: 1,
                isUrl: false
            });
        });
    }

    public play(titleSound: string) {
        NativeAudio.play({
            assetId: titleSound
        });
    }

    public stop(titleSound: string) {
        NativeAudio.stop({
            assetId: titleSound,
        });
    }

    public loop(titleSound: string) {
        NativeAudio.loop({
            assetId: titleSound,
        });
    }

    public unload(titleSound: string) {
        NativeAudio.unload({
            assetId: titleSound,
        });
    }

    public setVolume(titleSound: string, volume: number) {
        NativeAudio.setVolume({
            assetId: titleSound,
            volume: volume, // Entre 0 y 1
        });
    }
}
