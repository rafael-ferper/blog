import styles from "./SobreMim.module.css"

import PostagemModelo from "componentes/PostagemModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/20135836.jpeg"


export default function SobreMim() {
    return (
        <PostagemModelo
        fotoCapa={fotoCapa}
        titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Rafael!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Rafael distraído"
                className={styles.fotoSobreMim}
            />

            
<p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum ligula ut lectus porta, ac aliquam augue porta. Morbi vulputate odio dui, sodales mollis nunc venenatis in. Praesent eu odio quis erat fringilla ullamcorper vitae sit amet diam. Vestibulum sed ante facilisis, fermentum enim ut, sagittis dolor. Suspendisse vestibulum quam turpis, efficitur bibendum nulla tincidunt eget. Praesent feugiat augue sapien, et accumsan ex gravida vitae. Cras eget metus non mi suscipit accumsan ut vel leo. Vivamus id tristique elit. Integer quis suscipit libero, molestie accumsan ex.
</p>
<p className={styles.paragrafo}>
            Nunc sagittis odio dui, et ultrices arcu fringilla eu. Quisque eu lorem accumsan, lobortis dui quis, semper mauris. In hac habitasse platea dictumst. Proin mi diam, sagittis nec orci eu, ultricies molestie risus. Donec quis libero mattis, ultricies augue quis, congue metus. Fusce aliquet ex dapibus erat aliquam imperdiet. Nunc vestibulum tortor et augue elementum iaculis. Proin sed sagittis tortor. Mauris eleifend vitae felis id varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi congue arcu id urna condimentum pharetra. Proin finibus, sapien placerat efficitur aliquam, velit neque rhoncus est, sed euismod velit justo quis mauris.
</p>
<p className={styles.paragrafo}>
            Sed commodo, augue interdum vehicula tincidunt, nisi justo faucibus elit, at blandit ante turpis a justo. Phasellus magna risus, faucibus at facilisis sed, iaculis varius nisi. Fusce sollicitudin orci at elementum sollicitudin. Integer a tellus arcu. Donec nec elit at nulla fermentum fringilla vel at urna. Etiam ullamcorper, ligula condimentum pretium rhoncus, sapien nulla ornare lacus, id sagittis neque felis nec ligula. Nam et volutpat elit. Nunc eros dolor, pulvinar ac blandit et, tempus sit amet neque. Nullam lorem est, tempus in interdum non, egestas a tellus. In vitae tortor at augue fermentum mattis. Praesent sit amet sem condimentum, pulvinar nulla sed, tristique nibh. Cras pellentesque eget enim ac hendrerit. Duis at nisl ut purus fringilla laoreet. Praesent leo mauris, finibus non vehicula a, fringilla et tellus. Aliquam vitae velit mauris. Fusce rhoncus erat ligula, nec porttitor diam accumsan et.
</p>
<p className={styles.paragrafo}>
            Nulla eu malesuada neque. Phasellus ornare nibh sit amet neque porttitor rutrum. Aenean efficitur vitae ex nec vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pharetra rhoncus est, at tristique dolor tincidunt et. Fusce laoreet tempus tortor, eu eleifend nulla mattis at. Maecenas imperdiet orci ac consectetur rutrum. Nulla efficitur tincidunt urna, a pharetra quam. Morbi urna nunc, rhoncus a metus sed, sollicitudin pulvinar nulla. Cras eros ante, scelerisque ac vehicula vel, finibus quis lorem. Fusce sollicitudin risus eget erat rhoncus, nec sollicitudin magna dictum. Sed eu purus risus. Donec sodales feugiat ex vitae vehicula.
</p>
<p className={styles.paragrafo}>
            Vestibulum laoreet sapien sit amet urna facilisis, eget gravida nunc venenatis. Quisque tortor nisl, euismod sed turpis et, iaculis sagittis ipsum. Fusce erat neque, ullamcorper eget ornare et, interdum ac risus. Donec vulputate aliquam nisl ac aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pellentesque urna augue, vel eleifend ex dictum finibus. Pellentesque laoreet condimentum pulvinar. Donec ullamcorper neque nec cursus fermentum. In nisl dolor, imperdiet in libero ac, cursus scelerisque erat. Donec semper, mauris sed fermentum eleifend, dolor dui sodales nisl, sed tristique lacus mi ac est. Vestibulum risus velit, iaculis et lorem vitae, varius tincidunt augue. Nullam volutpat, magna ut tempus sagittis, felis justo tempus ex, sit amet aliquet enim neque id urna. Vivamus magna lacus, lobortis nec velit ut, tristique tincidunt nibh. Duis maximus tristique erat quis auctor. Phasellus dui dolor, fringilla eleifend risus quis, lobortis mattis velit. Sed consequat quam pretium viverra efficitur.
</p>
<p className={styles.paragrafo}>
            Mauris dolor ante, ultricies at ullamcorper ac, euismod a felis. Duis vulputate non ligula ut fringilla. Aenean ac aliquet nunc. Etiam nec vulputate nisi. Donec egestas non lacus eu vehicula. Curabitur in efficitur arcu. Ut iaculis, magna vitae fermentum semper, ante orci efficitur magna, vel commodo ex erat vitae mi. Aliquam placerat interdum gravida. Cras elementum maximus eros, viverra ullamcorper nisi maximus ac. 
</p>
        </PostagemModelo>
    )
}