import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    vehiculo_id: 1,
    modelo: "MAZDA",
    nombre: "MAZDA CX-90",
    descripcion: "La maestria se conduce",
    imagen_principal: "https://moracosta.netlify.app/assets/carro2.webp",
    precio: 299999,
    ficha_tecnica: "https://moracosta.netlify.app/assets/ficha.pdf",
    video_banner:
      "https://res.cloudinary.com/dxuauzyp9/video/upload/v1697326776/pacesivmm4jjwv2aavra.webm",
    detalles_banner: {
      one: "3.3L MOTOR SKYACTIV-G HÍBRIDO LIGERO",
      two: "6 CILINDROS EN LÍNEA",
      tree: "340hp 5,000 A 6,000 R.P.M",
    },
    detalles: {
      titulo1: "Mazda",
      texto1: "Lorem ipsun",
      imagen1:
        "https://www.mazdavardi.com.co/wp-content/uploads/2023/08/mazda-cx-90-ficha-tecnica.webp",
      titulo2: "Mazda",
      texto2: "Lorem ipsun",
      imagen2:
        "https://www.mazdavardi.com.co/wp-content/uploads/2023/08/mazda-cx-90-ficha-tecnica.webp",
    },
    imagen_especificaciones:
      "https://moracosta.netlify.app/assets/especificaciones.webp",
    especificaciones: {
      potencia: {
        potencia_motor: "200 HP",
        torque: "250 lb-pie",
      },
      seguridad: {
        Airbags: 6,
        "Frenos Antibloqueo(ABC)": "Si",
      },
      equipamiento: {
        Sistema_navegacion: "Si",
        Techo_solar: "Si",
      },
    },
  },
  {
    vehiculo_id: 2,
    modelo: "TOYOTA",
    nombre: "TOYOTA RAV4 XLE",
    descripcion: "La aventura en su máxima expresión",
    imagen_principal: "https://moracosta.netlify.app/assets/carro1.webp",
    precio: 349999,
    ficha_tecnica: "https://moracosta.netlify.app/assets/ficha.pdf",
    video_banner:
      "https://res.cloudinary.com/dxuauzyp9/video/upload/v1697326776/pacesivmm4jjwv2aavra.webm",
    detalles_banner: {
      one: "Motor de 2.5L DOHC con VVT-i",
      two: "4 CILINDROS",
      tree: "203hp 6,600 R.P.M",
    },
    detalles: {
      titulo1: "Toyota",
      texto1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagen1:
        "https://www.mazdavardi.com.co/wp-content/uploads/2023/08/mazda-cx-90-ficha-tecnica.webp",
      titulo2: "Toyota Safety Sense™ 2.0",
      texto2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imagen2:
        "https://www.mazdavardi.com.co/wp-content/uploads/2023/08/mazda-cx-90-ficha-tecnica.webp",
    },
    imagen_especificaciones:
      "https://moracosta.netlify.app/assets/especificaciones.webp",
    especificaciones: {
      potencia: {
        potencia_motor: "203 HP",
        torque: "184 lb-pie",
      },
      seguridad: {
        Airbags: 8,
        "Frenos Antibloqueo (ABS)": "Sí",
      },
      equipamiento: {
        "Sistema de Navegación": "Sí",
        "Techo Solar Panorámico": "Sí",
      },
    },
  },
  {
    vehiculo_id: 3,
    modelo: "FORD",
    nombre: "FORD Mustang GT",
    descripcion: "La potencia hecha automóvil",
    imagen_principal: "https://moracosta.netlify.app/assets/carro3.webp",
    precio: 449999,
    ficha_tecnica: "https://moracosta.netlify.app/assets/ficha.pdf",
    video_banner:
      "https://res.cloudinary.com/dxuauzyp9/video/upload/v1697326776/pacesivmm4jjwv2aavra.webm",
    detalles_banner: {
      one: "Motor V8 de 5.0L",
      two: "8 CILINDROS",
      tree: "450hp 7,000 R.P.M",
    },
    detalles: {
      titulo1: "Rendimiento Extremo",
      texto1:
        "El Ford Mustang GT ofrece una experiencia de manejo emocionante y un rendimiento excepcional.",
      imagen1:
        "https://www.mazdavardi.com.co/wp-content/uploads/2023/08/mazda-cx-90-ficha-tecnica.webp",
      titulo2: "Diseño Icónico",
      texto2:
        "El Mustang GT cuenta con un diseño clásico y aerodinámico que lo hace destacar en la carretera.",
      imagen2:
        "https://www.mazdavardi.com.co/wp-content/uploads/2023/08/mazda-cx-90-ficha-tecnica.webp",
    },
    imagen_especificaciones:
      "https://moracosta.netlify.app/assets/especificaciones.webp",
    especificaciones: {
      potencia: {
        potencia_motor: "450 HP",
        torque: "410 lb-pie",
      },
      seguridad: {
        Airbags: 6,
        "Sistema de Frenos de Alto Rendimiento": "Sí",
      },
      equipamiento: {
        "Sistema de Sonido Premium": "Sí",
        "Asientos Deportivos de Cuero": "Sí",
      },
    },
  },
];

export const vehiculosSlice = createSlice({
  name: "vehiculos",
  initialState,
  reducers: {},
});

export default vehiculosSlice.reducer;
