# 📒 Agenda de Contactos — Angular + Tailwind + JSON Server

App CRUD completa para gestionar contactos. Construida con Angular 17+, Tailwind CSS y JSON Server como API falsa.

---

## 🚀 Tecnologías usadas

| Tecnología | Para qué sirve |
|---|---|
| Angular 17+ | Framework principal |
| Tailwind CSS v3 | Estilos |
| JSON Server | API REST falsa |
| HttpClient | Peticiones HTTP |
| Angular Router | Navegación entre páginas |

---

## 📁 Estructura del proyecto

```
agenda-app/
├── src/
│   └── app/
│       ├── components/
│       │   ├── lista-contactos/       ← Muestra todos los contactos
│       │   └── formulario-contacto/   ← Crear y editar contactos
│       ├── services/
│       │   └── contacto.ts    ← Conexión con la API
│       ├── app.routes.ts              ← Rutas de la app
│       └── app.config.ts             ← Configuración global
├── db.json                            ← Base de datos de JSON Server
├── tailwind.config.js
└── package.json
```

---

## ⚙️ Instalación

```bash
# 1. Clona o entra al proyecto
cd agenda-app

# 2. Instala dependencias
npm install

# 3. Instala Tailwind
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init
```

---

## ▶️ Correr el proyecto

Necesitas **dos terminales** abiertas al mismo tiempo:

```bash
# Terminal 1 — API (JSON Server)
npm run api

# Terminal 2 — Angular
ng serve
```

- App Angular → http://localhost:4200
- API JSON Server → http://localhost:3000/contactos

---

## 🔌 Endpoints de la API

| Método | URL | Qué hace |
|---|---|---|
| GET | `/contactos` | Trae todos los contactos |
| POST | `/contactos` | Crea un contacto nuevo |
| PUT | `/contactos/:id` | Edita un contacto |
| DELETE | `/contactos/:id` | Elimina un contacto |

---

## 🧭 Rutas de la app

| URL | Componente | Descripción |
|---|---|---|
| `/` | `ListaContactosComponent` | Lista y detalle de contactos |
| `/nuevo` | `FormularioContactoComponent` | Crear contacto nuevo |
| `/editar/:id` | `FormularioContactoComponent` | Editar contacto existente |

---

## 🧠 Conceptos que aprendiste

### HttpClient
Permite hacer peticiones HTTP a una API:
```ts
this.http.get<Contacto[]>('http://localhost:3000/contactos')
```

### Observable y subscribe
Los datos de la API llegan de forma asíncrona:
```ts
this.contactoService.getAll().subscribe(data => {
  this.contactos = data;
});
```

### Injectable (Service)
Separa la lógica de la UI. El servicio maneja toda la comunicación con la API y los componentes solo lo usan:
```ts
constructor(private contactoService: ContactoService) {}
```

### ActivatedRoute
Lee parámetros de la URL como el `:id`:
```ts
const id = this.route.snapshot.paramMap.get('id');
```

### ngOnInit
Se ejecuta automáticamente cuando el componente carga:
```ts
ngOnInit() {
  this.cargarContactos();
}
```

---

## 🎨 Personalización de colores (Tailwind)

El tema oscuro usa estas clases principales:

| Elemento | Clase Tailwind |
|---|---|
| Fondo general | `bg-gray-900` |
| Tarjetas | `bg-gray-800` |
| Header | `bg-teal-700` |
| Texto principal | `text-gray-100` |
| Texto secundario | `text-gray-400` |
| Botón principal | `bg-teal-700` |
| Botón eliminar | `bg-red-900` |

---

## 🎯 Próximos pasos sugeridos

1. **Validaciones** — mostrar errores si el formulario está incompleto
2. **Confirmación al eliminar** — modal de confirmación antes de borrar
3. **Paginación** — mostrar contactos de 10 en 10
4. **Foto de perfil** — subir imagen para cada contacto
5. **Deploy** — publicar en Vercel o Netlify