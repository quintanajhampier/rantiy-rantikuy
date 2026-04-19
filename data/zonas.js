// Base de datos de ciudades y coordenadas GPS para Rantiy y Rantikuy
// Cobertura Nacional: 196 Provincias del Perú

window.ZONAS = {
    // --- LIMA Y CALLAO ---
    "Lima": { lat: -12.04, lon: -77.03, r: 0.4 },
    "Callao": { lat: -12.05, lon: -77.12, r: 0.15 },
    "Barranca": { lat: -10.75, lon: -77.76, r: 0.2 },
    "Cajatambo": { lat: -10.47, lon: -76.99, r: 0.2 },
    "Canta": { lat: -11.46, lon: -76.62, r: 0.2 },
    "Cañete": { lat: -13.07, lon: -76.38, r: 0.3 },
    "Huaral": { lat: -11.49, lon: -77.20, r: 0.3 },
    "Huarochirí": { lat: -11.83, lon: -76.38, r: 0.3 },
    "Huaura": { lat: -11.11, lon: -77.61, r: 0.3 },
    "Oyón": { lat: -10.66, lon: -76.77, r: 0.2 },
    "Yauyos": { lat: -12.46, lon: -75.91, r: 0.3 },

    // --- JUNÍN ---
    "Huancayo": { lat: -12.06, lon: -75.20, r: 0.2 },
    "Chanchamayo": { lat: -11.05, lon: -75.32, r: 0.3 },
    "Chupaca": { lat: -12.06, lon: -75.28, r: 0.15 },
    "Concepción": { lat: -11.91, lon: -75.31, r: 0.2 },
    "Jauja": { lat: -11.77, lon: -75.40, r: 0.2 },
    "Junín": { lat: -11.15, lon: -75.99, r: 0.2 },
    "Satipo": { lat: -11.25, lon: -74.63, r: 0.4 },
    "Tarma": { lat: -11.41, lon: -75.68, r: 0.2 },
    "Yauli": { lat: -11.52, lon: -75.93, r: 0.2 },

    // --- AYACUCHO ---
    "Huamanga": { lat: -13.15, lon: -74.22, r: 0.2 },
    "Cangallo": { lat: -13.62, lon: -74.13, r: 0.2 },
    "Huanca Sancos": { lat: -13.92, lon: -74.33, r: 0.2 },
    "Huanta": { lat: -12.94, lon: -74.24, r: 0.2 },
    "La Mar": { lat: -13.01, lon: -73.98, r: 0.3 },
    "Lucanas": { lat: -14.64, lon: -74.30, r: 0.4 },
    "Parinacochas": { lat: -15.15, lon: -73.66, r: 0.3 },
    "Páucar del Sara Sara": { lat: -15.28, lon: -73.34, r: 0.2 },
    "Sucre": { lat: -14.04, lon: -73.80, r: 0.2 },
    "Víctor Fajardo": { lat: -13.68, lon: -74.06, r: 0.2 },
    "Vilcas Huamán": { lat: -13.65, lon: -73.95, r: 0.2 },
    "VRAEM": { lat: -12.50, lon: -73.80, r: 0.4 }, // Zona especial

    // --- AREQUIPA ---
    "Arequipa": { lat: -16.40, lon: -71.53, r: 0.3 },
    "Camaná": { lat: -16.62, lon: -72.71, r: 0.2 },
    "Caravelí": { lat: -15.77, lon: -73.36, r: 0.4 },
    "Castilla": { lat: -15.65, lon: -72.43, r: 0.3 },
    "Caylloma": { lat: -15.63, lon: -71.65, r: 0.4 },
    "Condesuyos": { lat: -15.86, lon: -72.88, r: 0.3 },
    "Islay": { lat: -17.02, lon: -72.01, r: 0.2 },
    "La Unión": { lat: -15.20, lon: -72.93, r: 0.2 },

    // --- CUSCO ---
    "Cusco": { lat: -13.53, lon: -71.96, r: 0.2 },
    "Acomayo": { lat: -13.92, lon: -71.68, r: 0.2 },
    "Anta": { lat: -13.47, lon: -72.14, r: 0.2 },
    "Calca": { lat: -13.33, lon: -71.95, r: 0.3 },
    "Canas": { lat: -14.23, lon: -71.43, r: 0.2 },
    "Canchis": { lat: -14.15, lon: -71.22, r: 0.2 },
    "Chumbivilcas": { lat: -14.46, lon: -72.01, r: 0.4 },
    "Espinar": { lat: -14.79, lon: -71.41, r: 0.3 },
    "La Convención": { lat: -12.86, lon: -72.69, r: 0.6 },
    "Paruro": { lat: -13.76, lon: -71.84, r: 0.2 },
    "Paucartambo": { lat: -13.31, lon: -71.59, r: 0.3 },
    "Quispicanchi": { lat: -13.68, lon: -71.50, r: 0.4 },
    "Urubamba": { lat: -13.30, lon: -72.11, r: 0.2 },

    // --- PIURA ---
    "Piura": { lat: -5.19, lon: -80.62, r: 0.3 },
    "Ayabaca": { lat: -4.63, lon: -79.71, r: 0.3 },
    "Huancabamba": { lat: -5.23, lon: -79.45, r: 0.3 },
    "Morropón": { lat: -5.09, lon: -79.96, r: 0.3 },
    "Paita": { lat: -5.08, lon: -81.10, r: 0.2 },
    "Sullana": { lat: -4.90, lon: -80.68, r: 0.3 },
    "Talara": { lat: -4.57, lon: -81.27, r: 0.2 },
    "Sechura": { lat: -5.55, lon: -80.82, r: 0.3 },

    // --- LA LIBERTAD ---
    "Trujillo": { lat: -8.11, lon: -79.02, r: 0.2 },
    "Ascope": { lat: -7.71, lon: -79.10, r: 0.2 },
    "Bolívar": { lat: -7.16, lon: -77.70, r: 0.2 },
    "Chepén": { lat: -7.22, lon: -79.43, r: 0.2 },
    "Julcán": { lat: -8.04, lon: -78.49, r: 0.2 },
    "Otuzco": { lat: -7.89, lon: -78.56, r: 0.2 },
    "Pacasmayo": { lat: -7.40, lon: -79.42, r: 0.2 },
    "Pataz": { lat: -8.17, lon: -77.30, r: 0.3 },
    "Sánchez Carrión": { lat: -7.81, lon: -78.04, r: 0.2 },
    "Santiago de Chuco": { lat: -8.14, lon: -78.17, r: 0.2 },
    "Gran Chimú": { lat: -7.63, lon: -78.69, r: 0.2 },
    "Virú": { lat: -8.41, lon: -78.75, r: 0.2 },

    // --- LAMBAYEQUE ---
    "Chiclayo": { lat: -6.77, lon: -79.84, r: 0.2 },
    "Ferreñafe": { lat: -6.63, lon: -79.79, r: 0.2 },
    "Lambayeque": { lat: -6.70, lon: -79.90, r: 0.3 },

    // --- ÁNCASH ---
    "Huaraz": { lat: -9.52, lon: -77.52, r: 0.2 },
    "Casma": { lat: -9.47, lon: -78.31, r: 0.2 },
    "Huarmey": { lat: -10.06, lon: -78.15, r: 0.2 },
    "Santa": { lat: -9.07, lon: -78.59, r: 0.3 }, // Incluye Chimbote
    "Huaylas": { lat: -9.05, lon: -77.81, r: 0.2 },
    "Yungay": { lat: -9.14, lon: -77.74, r: 0.2 },
    "Carhuaz": { lat: -9.28, lon: -77.64, r: 0.2 },
    "Recuay": { lat: -9.72, lon: -77.45, r: 0.2 },
    "Bolognesi": { lat: -10.15, lon: -77.05, r: 0.2 },
    "Huari": { lat: -9.35, lon: -77.17, r: 0.3 },
    "Pallasca": { lat: -8.32, lon: -78.03, r: 0.2 },
    "Pomabamba": { lat: -8.82, lon: -77.46, r: 0.2 },
    "Mariscal Luzuriaga": { lat: -8.87, lon: -77.34, r: 0.15 },
    "Asunción": { lat: -9.18, lon: -77.39, r: 0.15 },
    "Carlos Fermín Fitzcarrald": { lat: -9.06, lon: -77.19, r: 0.15 },
    "Antonio Raymondi": { lat: -9.11, lon: -76.99, r: 0.15 },
    "Corongo": { lat: -8.57, lon: -77.89, r: 0.15 },
    "Sihuas": { lat: -8.54, lon: -77.62, r: 0.15 },
    "Ocros": { lat: -10.40, lon: -77.39, r: 0.15 },
    "Aija": { lat: -9.77, lon: -77.60, r: 0.15 },

    // --- ICA ---
    "Ica": { lat: -14.06, lon: -75.72, r: 0.3 },
    "Chincha": { lat: -13.41, lon: -76.13, r: 0.2 },
    "Nazca": { lat: -14.82, lon: -74.93, r: 0.3 },
    "Palpa": { lat: -14.53, lon: -75.18, r: 0.2 },
    "Pisco": { lat: -13.70, lon: -76.20, r: 0.2 },

    // --- PUNO ---
    "Puno": { lat: -15.84, lon: -70.02, r: 0.2 },
    "Azángaro": { lat: -14.90, lon: -70.19, r: 0.3 },
    "Carabaya": { lat: -14.05, lon: -70.43, r: 0.4 },
    "Chucuito": { lat: -16.59, lon: -69.32, r: 0.3 },
    "El Collao": { lat: -16.89, lon: -69.69, r: 0.4 },
    "Huancané": { lat: -15.20, lon: -69.76, r: 0.2 },
    "Lampa": { lat: -15.36, lon: -70.36, r: 0.3 },
    "Melgar": { lat: -14.87, lon: -70.76, r: 0.3 },
    "Moho": { lat: -15.36, lon: -69.49, r: 0.15 },
    "San Antonio de Putina": { lat: -14.91, lon: -69.67, r: 0.2 },
    "San Román": { lat: -15.49, lon: -70.13, r: 0.2 }, // Juliaca
    "Sandia": { lat: -14.32, lon: -69.46, r: 0.4 },
    "Yunguyo": { lat: -16.24, lon: -69.09, r: 0.15 },

    // --- CAJAMARCA ---
    "Cajamarca": { lat: -7.16, lon: -78.51, r: 0.2 },
    "Cajabamba": { lat: -7.62, lon: -78.04, r: 0.2 },
    "Celendín": { lat: -6.86, lon: -78.14, r: 0.2 },
    "Chota": { lat: -6.55, lon: -78.65, r: 0.2 },
    "Contumazá": { lat: -7.36, lon: -78.80, r: 0.2 },
    "Cutervo": { lat: -6.38, lon: -78.81, r: 0.2 },
    "Hualgayoc": { lat: -6.76, lon: -78.59, r: 0.2 },
    "Jaén": { lat: -5.70, lon: -78.80, r: 0.3 },
    "San Ignacio": { lat: -5.14, lon: -79.00, r: 0.3 },
    "San Marcos": { lat: -7.33, lon: -78.17, r: 0.2 },
    "San Miguel": { lat: -6.99, lon: -78.85, r: 0.2 },
    "San Pablo": { lat: -7.11, lon: -78.82, r: 0.15 },
    "Santa Cruz": { lat: -6.62, lon: -78.94, r: 0.2 },

    // --- LORETO ---
    "Maynas": { lat: -3.74, lon: -73.25, r: 0.8 }, // Iquitos
    "Alto Amazonas": { lat: -5.89, lon: -76.10, r: 0.6 }, // Yurimaguas
    "Datem del Marañón": { lat: -4.84, lon: -76.62, r: 0.6 },
    "Loreto": { lat: -4.50, lon: -73.97, r: 0.8 }, // Nauta
    "Mariscal Ramón Castilla": { lat: -3.90, lon: -70.51, r: 0.6 }, // Caballococha
    "Putumayo": { lat: -2.31, lon: -72.68, r: 0.6 },
    "Requena": { lat: -5.06, lon: -73.85, r: 0.6 },
    "Ucayali": { lat: -7.36, lon: -75.01, r: 0.6 }, // Contamana

    // --- SAN MARTÍN ---
    "Moyobamba": { lat: -6.03, lon: -76.97, r: 0.2 },
    "Bellavista": { lat: -7.05, lon: -76.58, r: 0.2 },
    "El Dorado": { lat: -6.59, lon: -76.71, r: 0.2 },
    "Huallaga": { lat: -6.93, lon: -76.75, r: 0.2 },
    "Lamas": { lat: -6.42, lon: -76.52, r: 0.2 },
    "Mariscal Cáceres": { lat: -7.18, lon: -76.73, r: 0.3 },
    "Picota": { lat: -6.92, lon: -76.33, r: 0.2 },
    "Rioja": { lat: -6.06, lon: -77.16, r: 0.2 },
    "San Martín": { lat: -6.48, lon: -76.36, r: 0.2 }, // Tarapoto
    "Tocache": { lat: -8.18, lon: -76.51, r: 0.3 },

    // --- UCAYALI ---
    "Coronel Portillo": { lat: -8.38, lon: -74.53, r: 0.6 }, // Pucallpa
    "Atalaya": { lat: -10.73, lon: -73.75, r: 0.6 },
    "Padre Abad": { lat: -9.03, lon: -75.50, r: 0.4 }, // Aguaytía
    "Purús": { lat: -9.76, lon: -70.76, r: 0.5 },

    // --- APURÍMAC ---
    "Abancay": { lat: -13.63, lon: -72.88, r: 0.2 },
    "Andahuaylas": { lat: -13.65, lon: -73.38, r: 0.2 },
    "Antabamba": { lat: -14.36, lon: -72.88, r: 0.2 },
    "Aymaraes": { lat: -14.00, lon: -73.15, r: 0.2 },
    "Cotabambas": { lat: -13.91, lon: -72.23, r: 0.2 },
    "Chincheros": { lat: -13.51, lon: -73.72, r: 0.2 },
    "Grau": { lat: -14.05, lon: -72.63, r: 0.2 },

    // --- HUÁNUCO ---
    "Huánuco": { lat: -9.93, lon: -76.24, r: 0.2 },
    "Ambo": { lat: -10.12, lon: -76.20, r: 0.2 },
    "Dos de Mayo": { lat: -9.82, lon: -76.81, r: 0.2 },
    "Huacaybamba": { lat: -9.03, lon: -76.95, r: 0.2 },
    "Huamalíes": { lat: -9.38, lon: -76.68, r: 0.2 },
    "Leoncio Prado": { lat: -9.29, lon: -75.99, r: 0.3 }, // Tingo María
    "Marañón": { lat: -8.67, lon: -76.43, r: 0.3 },
    "Pachitea": { lat: -9.89, lon: -75.95, r: 0.2 },
    "Puerto Inca": { lat: -9.38, lon: -74.96, r: 0.4 },
    "Lauricocha": { lat: -10.14, lon: -76.71, r: 0.2 },
    "Yarowilca": { lat: -9.73, lon: -76.62, r: 0.2 },

    // --- HUANCAVELICA ---
    "Huancavelica": { lat: -12.78, lon: -74.97, r: 0.2 },
    "Acobamba": { lat: -12.84, lon: -74.56, r: 0.2 },
    "Angaraes": { lat: -12.98, lon: -74.75, r: 0.2 },
    "Castrovirreyna": { lat: -13.28, lon: -75.31, r: 0.3 },
    "Churcampa": { lat: -12.74, lon: -74.38, r: 0.2 },
    "Huaytará": { lat: -13.60, lon: -75.35, r: 0.3 },
    "Tayacaja": { lat: -12.27, lon: -74.87, r: 0.3 },

    // --- PASCO ---
    "Pasco": { lat: -10.66, lon: -76.25, r: 0.3 }, // Cerro de Pasco
    "Daniel Alcides Carrión": { lat: -10.49, lon: -76.51, r: 0.2 },
    "Oxapampa": { lat: -10.57, lon: -75.40, r: 0.4 },

    // --- TACNA ---
    "Tacna": { lat: -18.01, lon: -70.25, r: 0.3 },
    "Candarave": { lat: -17.26, lon: -70.24, r: 0.2 },
    "Jorge Basadre": { lat: -17.61, lon: -70.76, r: 0.2 },
    "Tarata": { lat: -17.47, lon: -70.03, r: 0.2 },

    // --- MOQUEGUA ---
    "Mariscal Nieto": { lat: -17.19, lon: -70.93, r: 0.3 }, // Moquegua
    "General Sánchez Cerro": { lat: -16.48, lon: -70.78, r: 0.3 },
    "Ilo": { lat: -17.64, lon: -71.33, r: 0.2 },

    // --- TUMBES ---
    "Tumbes": { lat: -3.56, lon: -80.45, r: 0.2 },
    "Contralmirante Villar": { lat: -3.91, lon: -80.78, r: 0.2 }, // Zorritos
    "Zarumilla": { lat: -3.50, lon: -80.27, r: 0.15 },

    // --- AMAZONAS ---
    "Chachapoyas": { lat: -6.23, lon: -77.86, r: 0.2 },
    "Bagua": { lat: -5.63, lon: -78.53, r: 0.3 },
    "Bongará": { lat: -5.87, lon: -77.94, r: 0.2 },
    "Condorcanqui": { lat: -4.38, lon: -77.93, r: 0.5 },
    "Luya": { lat: -6.16, lon: -77.94, r: 0.2 },
    "Rodríguez de Mendoza": { lat: -6.39, lon: -77.48, r: 0.2 },
    "Utcubamba": { lat: -5.75, lon: -78.44, r: 0.3 },

    // --- MADRE DE DIOS ---
    "Tambopata": { lat: -12.59, lon: -69.18, r: 0.5 }, // Puerto Maldonado
    "Manu": { lat: -12.27, lon: -70.88, r: 0.6 },
    "Tahuamanu": { lat: -11.09, lon: -69.58, r: 0.5 }
};
