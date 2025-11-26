# Portfolio

> "You ain't got nish, no, you don't touch bands."  
> — fakemink

## Tech Stack

- **[Go](https://go.dev/)** - Backend server and routing
- **[Templ](https://templ.guide/)** - Type-safe Go templating engine
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Prerequisites

- Go 1.2 or higher
- Make (optional, but recommended)

## Installation

```bash
git clone https://github.com/501urchin/portfolio.git
cd portfolio
make deps
```

## Running the Application

```bash
make run
```

The application will be available at `http://localhost:3000`

### Manual Build

```bash
go tool templ generate
go build -ldflags="-s -w" -trimpath -o portfolio
./portfolio
```
