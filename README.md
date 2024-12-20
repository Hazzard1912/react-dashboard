# Dashboard de Llamadas - React App

Este es un proyecto de React que muestra un Dashboard básico con datos de llamadas simulados, utilizando TypeScript, React, Tailwind CSS y un filtro funcional por estado de la llamada.

## Descripción

La aplicación carga datos desde un archivo JSON, simulando la llamada a una API, muestra una tabla con las llamadas realizadas, y permite filtrar las llamadas por su estado: "Exitosa", "Fallida" o "En Proceso". 

La tabla se muestra de manera dinámica y se actualiza cuando se selecciona un filtro. También incluye un "loader" básico mientras los datos están siendo cargados.

## Tecnologías

- React 18+
- TypeScript
- Tailwind CSS
- Fetch API (para cargar datos desde un archivo local)
- useState y useEffect para manejar el estado y los efectos secundarios

## Instalación

Sigue los pasos a continuación para ejecutar el proyecto en tu máquina local.

### Requisitos previos

- Node.js (versión recomendada 16+)
- npm (v6+)

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Hazzard1912/react-dashboard.git
```

### 2. Instalar dependencias

Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
cd react-dashboard
npm install
```

### 3. Ejecutar el proyecto

Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

Esto abrirá la aplicación en http://localhost:5173.

### 4. Ver el proyecto

Abre tu navegador y ve a http://localhost:5173 para ver la aplicación en acción.
