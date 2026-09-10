# Especificación de Portafolio Web para Perfil Informático

## Enfoque: Divulgación Progresiva (Progressive Disclosure) para Agentes de IA

### NIVEL 1 — OBJETIVO PRINCIPAL

Diseñar un portafolio profesional de una sola página para un perfil del área informática.

El diseño debe transmitir principalmente:

- Profesionalismo técnico.
- Dominio del desarrollo de software.
- Capacidad para resolver problemas.
- Conocimiento de tecnologías modernas.
- Experiencia mediante proyectos reales.
- Facilidad de navegación y lectura.

La prioridad visual debe ser:

**Contenido profesional → claridad → experiencia técnica → proyectos → estética.**

Evitar diseños excesivamente decorativos, similares a páginas de agencias de marketing.

El estilo visual recomendado es:

> **Minimalismo Técnico + estética Developer.**

---

# NIVEL 2 — REGLAS DE DISEÑO PRIORITARIAS

## 1. Tema visual

Utilizar **modo oscuro como configuración predeterminada**.

El diseño debe utilizar una interfaz limpia basada principalmente en:

- Fondos oscuros.
- Tonos grises.
- Contrastes adecuados.
- Elementos visuales discretos.
- Espaciado suficiente.
- Componentes con apariencia tecnológica.

Debe existir un **interruptor Dark/Light Mode** que permita al usuario cambiar al modo claro.

---

## 2. Tipografía

Utilizar una combinación de dos tipos de tipografía:

### Tipografía general

Para textos, descripciones y contenido:

- Inter
- Roboto
- u otra fuente Sans-Serif moderna y legible.

### Tipografía técnica

Para elementos relacionados con programación:

- Fira Code
- JetBrains Mono
- Source Code Pro

La tipografía monoespaciada puede utilizarse en:

- Etiquetas tecnológicas.
- Badges.
- Fragmentos de código.
- Pequeños títulos técnicos.
- Información relacionada con herramientas.

No utilizar tipografías excesivamente decorativas.

---

## 3. Animaciones

Las animaciones deben ser **sutiles y funcionales**.

Utilizar:

- Transiciones suaves.
- Efectos hover.
- Animaciones discretas durante el scroll.
- Aparición progresiva de componentes.
- Cambios de estado visual.

Evitar:

- Animaciones excesivas.
- Efectos que dificulten la lectura.
- Elementos que distraigan del contenido.
- Animaciones innecesarias únicamente por motivos decorativos.

El objetivo es demostrar dominio del Frontend sin convertir el portafolio en una demostración de efectos visuales.

---

# NIVEL 3 — ESTRUCTURA DE LA PÁGINA

La página debe utilizar una arquitectura **One-Page**.

Debe existir una navegación superior **sticky**, que permanezca visible mientras el usuario se desplaza.

La navegación debe permitir acceder rápidamente a:

1. Inicio
2. Tecnologías
3. Proyectos
4. Experiencia
5. Educación
6. Contacto

La estructura general recomendada es:

**Navbar → Hero → Tech Stack → Proyectos → Experiencia/Educación → Contacto**

---

# NIVEL 4 — CONTENIDO DE CADA SECCIÓN

## A. HERO — Presentación inicial

La sección Hero es el primer contenido que debe visualizar el usuario.

Debe comunicar inmediatamente:

- Quién es el profesional.
- Qué hace.
- Qué tecnologías domina.
- Qué valor puede aportar.

### Contenido obligatorio

#### Nombre

Mostrar el nombre completo en un tamaño grande y claramente visible.

#### Rol profesional

Mostrar una especialidad concreta.

Ejemplos:

> Ingeniero de Sistemas | Full Stack Developer

o:

> DevOps & Cloud Engineer

o:

> Data Engineer | Python Developer

#### Propuesta de valor

Utilizar una única frase clara y contundente.

Ejemplo:

> Diseño y desarrollo soluciones de software escalables y eficientes para resolver problemas complejos.

#### CTA

Incluir dos acciones principales:

**[Ver Proyectos]**

y

**[Descargar CV en PDF]**

El botón para descargar el CV debe ser claramente identificable.

---

# NIVEL 5 — TECH STACK

La sección de tecnologías debe mostrar las competencias técnicas de manera organizada.

### Regla importante

**No utilizar barras de porcentaje para representar conocimientos.**

Por ejemplo, evitar:

```text
Python █████████░ 90%
JavaScript ███████░░░ 70%
Docker ██████░░░░ 60%

```

Este tipo de representación puede resultar subjetiva y poco profesional.

En su lugar, agrupar las tecnologías por categorías.

### Categoría: Lenguajes

Ejemplos:

- Python
- JavaScript
- TypeScript
- Java
- Go

### Categoría: Frameworks y librerías

Ejemplos:

- React
- Node.js
- Next.js
- Spring Boot

### Categoría: Bases de datos y Cloud

Ejemplos:

- PostgreSQL
- MongoDB
- AWS
- Docker
- Kubernetes

Las tecnologías pueden representarse mediante:

- Cards.
- Badges.
- Íconos oficiales.
- Listas categorizadas.

La interfaz debe permanecer limpia y fácil de escanear visualmente.

---

# NIVEL 6 — PROYECTOS

La sección de proyectos debe ser considerada **una de las partes más importantes del portafolio**.

Los proyectos no deben presentarse únicamente como imágenes o capturas de pantalla.

Cada proyecto debe funcionar como un **mini caso de estudio**.

## Estructura de cada proyecto

Cada proyecto debe contener:

### 1. Nombre del proyecto

Mostrar claramente el nombre.

### 2. Problema

Explicar brevemente qué problema existía.

### 3. Solución

Explicar qué se desarrolló para resolverlo.

### 4. Tecnologías

Mostrar badges con las tecnologías utilizadas.

Ejemplo:

```text
Python
PostgreSQL
Docker
React
AWS

```

### 5. Resultado

Cuando sea posible, mostrar resultados medibles.

Ejemplos:

- Reducción del tiempo de respuesta.
- Disminución del consumo de recursos.
- Automatización de procesos.
- Número de usuarios.
- Cantidad de datos procesados.

### 6. Acciones

Cada proyecto debe proporcionar dos acciones principales:

**[Ver código en GitHub]**

**[Ver Demo]**

Cuando no exista una demo disponible, no crear un enlace ficticio.

---

# NIVEL 7 — EXPERIENCIA Y EDUCACIÓN

La experiencia profesional y la educación deben representarse mediante una **línea de tiempo (Timeline)**.

Utilizar orden cronológico inverso:

> Lo más reciente → lo más antiguo.

Cada elemento debe mostrar:

- Fecha o período.
- Cargo o título.
- Empresa o institución.
- Descripción.
- Principales responsabilidades.
- Logros técnicos.

## Regla de redacción

Priorizar **logros medibles** sobre simples listas de responsabilidades.

En lugar de:

> Responsable de bases de datos.

Preferir:

> Optimización de consultas SQL que redujo los tiempos de respuesta del servidor en un 40%.

La información debe demostrar impacto, no solamente enumerar tareas realizadas.

---

# NIVEL 8 — ADAPTACIÓN SEGÚN ESPECIALIDAD

El diseño puede ajustarse dependiendo del perfil profesional.

## Perfil A — Minimalista / Corporativo

Recomendado para:

- Backend Developer.
- Cloud Engineer.
- DevOps.
- Ciberseguridad.
- Ciencia de Datos.
- Data Engineering.

### Características

- Fondos oscuros o grises.
- Interfaz limpia.
- Tipografía profesional.
- Información técnica.
- Métricas.
- Arquitecturas.
- Resultados.
- Poco contenido decorativo.

La prioridad debe ser:

**Experiencia técnica + resultados + arquitectura + conocimientos.**

---

## Perfil B — Interactivo / Creativo

Recomendado para:

- Frontend Developer.
- Full Stack Developer orientado a producto.
- UX/UI.
- Diseñadores digitales.

### Características

- Microanimaciones.
- Componentes interactivos.
- Transiciones avanzadas.
- Elementos visuales dinámicos.
- Contrastes de color.
- Animaciones CSS.
- WebGL cuando realmente aporte valor.

La prioridad debe ser:

**Experiencia de usuario + interacción + creatividad + calidad visual.**

---

# NIVEL 9 — REQUISITOS TÉCNICOS OBLIGATORIOS

## 1. Diseño Responsive

El portafolio debe adaptarse completamente a:

- Computadoras.
- Tablets.
- Teléfonos móviles.

No debe existir pérdida de funcionalidad ni problemas de navegación en pantallas pequeñas.

La interfaz móvil debe considerarse una prioridad, ya que reclutadores pueden acceder al portafolio desde dispositivos móviles.

---

## 2. CV descargable

El portafolio debe incluir un acceso claramente visible para descargar el CV.

Formato obligatorio:

**PDF**

El acceso debe ser fácilmente localizable desde:

- Hero.
- Navbar o menú.
- Una sección específica de contacto, si resulta conveniente.

El archivo debe corresponder al CV tradicional que pueda ser descargado y utilizado posteriormente en sistemas de reclutamiento o ATS.

---

# NIVEL 10 — REGLAS DE IMPLEMENTACIÓN PARA EL AGENTE DE IA

Al construir el portafolio, el agente de IA debe aplicar las siguientes prioridades:

### Prioridad 1 — Funcionalidad

Todos los elementos principales deben funcionar correctamente.

### Prioridad 2 — Usabilidad

La información debe poder localizarse rápidamente.

### Prioridad 3 — Responsividad

El diseño debe funcionar correctamente en diferentes tamaños de pantalla.

### Prioridad 4 — Accesibilidad

Mantener:

- Contraste adecuado.
- Textos legibles.
- Navegación clara.
- Estados visuales comprensibles.
- Elementos interactivos identificables.

### Prioridad 5 — Rendimiento

Evitar recursos innecesariamente pesados.

Las animaciones y elementos visuales no deben afectar significativamente el rendimiento.

### Prioridad 6 — Estética

Una vez garantizados los puntos anteriores, mejorar:

- Animaciones.
- Microinteracciones.
- Detalles visuales.
- Transiciones.
- Jerarquía visual.

---

# NIVEL 11 — AGENTE DE IA: VERSIÓN 1

El portafolio debe contemplar desde su arquitectura la posibilidad de incorporar un agente de IA que responda preguntas sobre el perfil profesional.

### Objetivo de la primera versión

La primera versión **NO debe implementar un sistema RAG completo**.

Se utilizará un archivo central:

```text
src/data/profile.json
```

Este archivo será la **fuente estructurada de verdad del perfil profesional** y contendrá, como mínimo, información sobre:

- Identidad y presentación profesional.
- Rol o especialidad.
- Propuesta de valor.
- Tecnologías.
- Proyectos.
- Experiencia.
- Educación.
- Certificaciones, cuando corresponda.
- Enlaces profesionales.
- Información de contacto.
- Objetivos profesionales, cuando corresponda.

La misma fuente de datos debe poder alimentar, cuando sea conveniente:

1. El contenido visual del CV.
2. Las tarjetas de proyectos.
3. La sección de tecnologías.
4. La experiencia y educación.
5. El contexto utilizado por el agente de IA.

### Regla de fuente única de información

No duplicar manualmente la información del perfil en múltiples componentes.

La arquitectura debe favorecer:

```text
profile.json
     │
     ├──> CV / Portfolio
     │
     └──> Agente IA
```

De esta manera, una modificación realizada en `profile.json` puede reflejarse tanto en el portafolio como en las respuestas del agente.

---

## NIVEL 12 — IA LOCAL Y OLLAMA

La arquitectura debe quedar preparada para integrar un modelo Llama mediante **Ollama**, priorizando inicialmente el desarrollo y las pruebas locales.

Arquitectura conceptual:

```text
Navegador
    │
    ▼
Interfaz de chat
    │
    ▼
Endpoint/API del proyecto
    │
    ▼
Ollama
    │
    ▼
Modelo Llama
    │
    ▼
profile.json
```

El navegador **no debe depender directamente de Ollama**.

La comunicación con el modelo debe estar abstraída mediante una capa de servidor/API para permitir cambiar posteriormente de modelo o proveedor sin rediseñar la interfaz.

### Requisito de desacoplamiento

La interfaz del agente no debe asumir que el modelo será siempre Llama.

Debe ser posible sustituir posteriormente:

```text
Llama + Ollama
```

por otra solución compatible sin modificar significativamente el frontend.

---

# NIVEL 13 — COMPORTAMIENTO DEL AGENTE PROFESIONAL

El agente debe comportarse como un **asistente profesional del propietario del portafolio**, no como un chatbot genérico.

Debe responder preguntas relacionadas con:

- Perfil profesional.
- Experiencia.
- Educación.
- Proyectos.
- Tecnologías.
- Herramientas.
- Conocimientos.
- Objetivos profesionales.
- Información disponible en el CV.

### Regla crítica: no inventar información

El agente debe utilizar únicamente la información disponible en `profile.json` y el contexto explícitamente proporcionado.

Si la información solicitada no existe, debe indicarlo claramente.

Ejemplo:

> No encuentro información suficiente en el perfil para afirmar que tenga experiencia profesional con Kubernetes.

No debe inventar:

- Años de experiencia.
- Empresas.
- Proyectos.
- Certificaciones.
- Tecnologías.
- Logros.
- Cargos.
- Métricas.
- Experiencia laboral.

---

# NIVEL 14 — CONTEXTO PARA LLAMA EN LA V1

La primera versión puede construir dinámicamente un contexto a partir de `profile.json`.

Conceptualmente:

```text
Pregunta del visitante
        │
        ▼
Contexto de profile.json
        │
        ▼
System Prompt
        │
        ▼
Llama
        │
        ▼
Respuesta
```

No implementar todavía:

- Vector database.
- Embeddings.
- Chunking avanzado.
- Retrieval semántico.
- Pipeline RAG completo.
- Fine-tuning.
- Entrenamiento del modelo.

Estos componentes quedan reservados para una futura versión.

---

# NIVEL 15 — EVOLUCIÓN FUTURA HACIA RAG

La arquitectura de V1 debe permitir evolucionar posteriormente desde:

```text
V1

profile.json
     │
     ▼
contexto
     │
     ▼
Llama
```

hacia:

```text
V2 / futura

Documentos
    │
    ▼
Chunking
    │
    ▼
Embeddings
    │
    ▼
Base vectorial
    │
    ▼
Retrieval
    │
    ▼
Contexto relevante
    │
    ▼
Llama
    │
    ▼
Respuesta
```

La implementación de RAG **no forma parte del alcance obligatorio de la primera versión**.

La prioridad inicial es construir una base sencilla, comprensible, mantenible y funcional.

---

# NIVEL 16 — RENDIMIENTO Y CONSUMO DE RECURSOS DEL AGENTE

El agente de IA debe ser una funcionalidad opcional.

La página principal debe continuar funcionando correctamente aunque el servicio de IA:

- Esté apagado.
- No esté disponible.
- No pueda conectarse con Ollama.
- Presente un error.
- No tenga un modelo instalado.

No ejecutar el modelo de IA al cargar la página.

El modelo debe utilizarse únicamente cuando el visitante solicite una interacción.

Arquitectura:

```text
Visita normal
     │
     ▼
CV estático
     │
     └──> NO ejecuta Llama


Usuario abre el chat
     │
     ▼
Pregunta
     │
     ▼
API
     │
     ▼
Ollama + Llama
```

Esto mantiene la página ligera y evita consumo innecesario de CPU, RAM y recursos del modelo.

---

# NIVEL 17 — FALLBACK Y DISPONIBILIDAD

Si el agente de IA no está disponible, la interfaz debe mostrar un estado comprensible.

Ejemplo:

> El asistente de IA no está disponible en este momento. Puedes consultar directamente mi perfil, proyectos y CV.

Nunca mostrar errores técnicos internos al visitante, tales como:

```text
ECONNREFUSED
localhost:11434
stack trace
internal server error
```

Los errores técnicos deben registrarse de forma apropiada para desarrollo, pero no deben exponerse innecesariamente al usuario final.

---

# NIVEL 18 — PRIVACIDAD Y DATOS DEL PERFIL

El agente debe trabajar únicamente con información profesional que el propietario haya decidido publicar.

No incorporar al contexto:

- Contraseñas.
- Tokens.
- Claves API.
- Credenciales.
- Información privada.
- Datos personales innecesarios.

El archivo `profile.json` debe considerarse una fuente de **información pública del portafolio**.

Los secretos y credenciales nunca deben almacenarse dentro de:

```text
profile.json
```

ni dentro del código fuente del frontend.


# PRINCIPIO GENERAL DE DIVULGACIÓN PROGRESIVA

El contenido del portafolio debe revelar información gradualmente.

El usuario debe recibir primero la información esencial y posteriormente los detalles.

### Nivel de información inicial

Mostrar:

**Nombre → Rol → Propuesta de valor → CTA**

### Segundo nivel

Mostrar:

**Tecnologías → Proyectos principales**

### Tercer nivel

Mostrar:

**Problema → Solución → Arquitectura → Tecnologías → Resultados**

### Cuarto nivel

Mostrar información adicional únicamente cuando sea necesaria:

- Detalles técnicos.
- Repositorio.
- Demo.
- Arquitectura.
- Métricas.
- Documentación.

De esta manera, la interfaz evita saturar al usuario y permite que cada persona profundice únicamente en la información que le interesa.

---

# PRINCIPIO FINAL PARA EL AGENTE DE IA

El agente debe interpretar el portafolio como una **herramienta profesional de presentación**, no como una simple página visual.

La regla fundamental es:

> **Mostrar primero lo esencial, permitir descubrir lo importante y ocultar los detalles avanzados hasta que sean necesarios.**

El resultado final debe comunicar rápidamente:

**Quién soy → qué sé hacer → qué he construido → qué resultados he conseguido → cómo puedo ser contactado.**

La estética debe estar al servicio de la información y no competir con ella.