import {
  Container,
  Resume,
  Title,
  Video,
} from "../../styles/components/ia-salud/miIdentidadVocal.style";

function MiIdentidadVocal() {
  return (
    <Container>
      <Title>
        Proyecto Mi Identidad Vocal: programa ImpaCT.ar Ciencia y Tecnología -
        Ministerio de Salud de la Nación.
      </Title>
      <Resume>
        En las actividades cotidianas se hace evidente que la voz desempeña un
        papel indispensable. Desde la comunicación con el entorno familiar,
        hasta el desempeño académico y laboral. Prescindir de este instrumento
        significa una desventaja importante para el desarrollo de cualquier
        persona.
      </Resume>
      <Resume>
        La clonación de voz emerge como una herramienta de gran potencial en la
        asistencia a personas afectadas por patologías de alta complejidad.
        Entre las condiciones que mayores limitaciones generan se encuentran la
        esclerosis lateral amiotrófica (ELA), la enfermedad de Huntington (EH),
        la apraxia, el accidente cerebrovascular (ACV) y el trastorno del
        espectro autista (TEA). Sin embargo, existen otro tipo de afecciones
        leves que pueden ser mitigadas con la tecnología propuesta, como por
        ejemplo, las intervenciones quirúrgicas en las cuerdas vocales y
        traqueotomías.
      </Resume>
      <Resume>
        Mediante la aplicación de la clonación de voz, los usuarios podrán
        introducir mensajes en formato de texto, lo que conlleva a la producción
        de una representación auditiva por medio de una voz sintética. Esta
        tendrá como característica principal una gran similitud con su voz
        natural gracias al registro de audios de referencia y las tecnologías
        que se describen en este documento.
      </Resume>
      <Resume>
        El software que desarrollamos permite reproducir cualquier texto que se
        ingrese, en forma de discurso y en español rioplatense. Esto representa
        un gran aporte en términos de inclusión para un porcentaje de la
        población que se ve imposibilitado en su desarrollo cotidiano.
      </Resume>
      <Video
        src="https://www.youtube.com/embed/-KylP16dxj0?si=CDhRIkNFvzT6ZUnR"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </Container>
  );
}

export default MiIdentidadVocal;
