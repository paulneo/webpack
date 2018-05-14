const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports={
  entry: {
    "home": path.resolve(__dirname, 'src/home.js'),

  },

  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
  },
  devtool: 'eval-source-map',
  module:{
    rules:[
      {
        test:/\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
          publicPath:'../'
        })
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:'es2015',
          }
        },
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 1000000,
            fallback: 'url-loader',
            name: 'images/[name].[ext]',
            publicPath:'../',
          }
        }
      },

    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats:"errors-only",
    open:true,
    // host: "0.0.0.0"
  },
  plugins: [
    //favicon
    new FaviconsWebpackPlugin({

     logo: './src/fav.png',
     prefix: 'icons/',
     emitStats: false,
     statsFilename: 'iconstats.json',
     persistentCache: true,
     inject: true,
     background: '#fff',
     title: 'Webpack App',
     publicPath:'../',
     icons: {
       android: true,
       appleIcon: true,
       appleStartup: true,
       coast: false,
       firefox: true,
       opengraph: false,
       twitter: false,
       yandex: false,
       windows: false
     }
   }),

    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Sistemas Éticos',
      hash:true,
      filename:'index.html',
      template: './src/index.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Sistemas Éticos',
      hash:true,
      filename:'es/index.html',
      template: './src/es/index.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal -  Nuestra Historia',
      hash:true,
      filename:'es/Historia-de-Ethicsglobal.html',
      template: './src/es/historia-de-ethics-global.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal -Acerca de nosotros',
      hash:true,
      filename:'es/acerca-de-ethicsglobal.html',
      template: './src/es/acerca-de-ethics-global.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal -  Qué le ayuda a detectar el Sistema Ético de Denuncias',
      hash:true,
      filename:'es/que-le-ayuda-a-detectar-nuestro-sistema-etico-de-denuncias-laborales.html',
      template: './src/es/que-le-ayuda-a-detectar.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal -  Nuestros Clientes',
      hash:true,
      filename:'es/clientes-de-ethicsglobal.html',
      template: './src/es/clientes.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Qué beneficios obtiene',
      hash:true,
      filename:'es/beneficios.html',
      template: './src/es/beneficios.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal -  Componentes de nuestro Sistema Ético de Denuncias',
      hash:true,
      filename:'es/componentes-de-nuestro-sistema-etico-de-denuncias.html',
      template: './src/es/caracteristicas.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal -  Canales de Reporte',
      hash:true,
      filename:'es/canales-de-reporte-de-denuncia.html',
      template: './src/es/canales-de-reporte.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Gestor de Casos Línea Ética',
      hash:true,
      filename:'es/gestion-de-casos-de-sistema-etico.html',
      template: './src/es/gestion-de-incidencias.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Investigación de Casos',
      hash:true,
      filename:'es/investigacion-de-casos.html',
      template: './src/es/investigacion-de-resolucion.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Seguimiento de Casos',
      hash:true,
      filename:'es/seguimiento-de-casos.html',
      template: './src/es/seguimiento-de-casos.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Elearning',
      hash:true,
      filename:'es/e-learning.html',
      template: './src/es/e-learning.pug',
    }),
    new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Campaña de Difusión de Ética Laboral',
        hash:true,
        filename:'es/campania-de-difusion-de-etica-laboral.html',
        template: './src/es/campaña-de-difusion.pug',
      }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Campaña de Difusión de Ética Laboral',
      hash:true,
      filename:'es/campanhas-de-divulgacao.html',
      template: './src/es/campaña-de-difusion.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Planes de Servicio de Sistema Ético de Denuncias',
      hash:true,
      filename:'es/planes-de-servicio-de-sistema-etico-de-denuncias.html',
      template: './src/es/planes-de-servicio.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Nuestra Fábrica de Software',
      hash:true,
      filename:'es/fabrica-de-software.html',
      template: './src/es/fabrica-de-software.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - PRIS',
      hash:true,
      filename:'es/pris.html',
      template: './src/es/pris.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Cómo implementamos un Sistema Ético de Denuncias',
      hash:true,
      filename:'es/implementacion-del-sistema-etico-de-denuncias.html',
      template: './src/es/implementacion.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Servicios Legales y de Investigación',
      hash:true,
      filename:'es/servicios-legales-y-de-investigacion.html',
      template: './src/es/servicios-legales-y-de-investigacion.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Seguridad y protección ',
      hash:true,
      filename:'es/seguridad-y-proteccion-de-la-informacion-en-sistema-de-denuncias.html',
      template: './src/es/seguridad-y-proteccion-de-la-informacion-en-sistema-de-denuncias.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Contactos',
      hash:true,
      filename:'es/contactos.html',
      template: './src/es/contactos.pug',
    }),


    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - Prensa',
      hash:true,
      filename:'es/prensa.html',
      template: './src/es/prensa.pug',
    }),

    new HtmlWebpackPlugin({
      title: 'EthicsGlobal - error',
      hash:true,
      filename:'es/404.html',
      template: './src/es/404.pug',
    }),

    new HtmlWebpackPlugin({
      title: 'Aviso de Privacidad',
      hash:true,
      filename:'es/aviso-de-privacidad.html',
      template: './src/es/aviso-de-privacidad.pug',
    }),

    new HtmlWebpackPlugin({
      title: 'Aviso de Privacidad',
      hash:true,
      filename:'es/gracias.html',
      template: './src/es/gracias.pug',
    }),


    // en  //
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Sistemas Éticos',
        hash:true,
        filename:'en/index.html',
        template: './src/en/index.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Nuestra Historia',
        hash:true,
        filename:'en/ethicsglobal-history.html',
        template: './src/en/historia-de-ethics-global.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - About us',
        hash:true,
        filename:'en/about-ethics-global.html',
        template: './src/en/about-ethics-global.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Qué le ayuda a detectar el Sistema Ético de Denuncias',
        hash:true,
        filename:'en/what-we-help-detect.html',
        template: './src/en/what-we-help-detect.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Nuestros Clientes',
        hash:true,
        filename:'en/our-clients.html',
        template: './src/en/our-clients.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Qué beneficios obtiene',
        hash:true,
        filename:'en/benefits-of-our-service.html',
        template: './src/en/benefits-of-our-service.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Componentes de nuestro Sistema Ético de Denuncias',
        hash:true,
        filename:'en/ethics-reporting-system-components.html',
        template: './src/en/ethics-reporting-system-components.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Canales de Reporte',
        hash:true,
        filename:'en/reporting-channels.html',
        template: './src/en/reporting-channels.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Gestor de Casos Línea Ética',
        hash:true,
        filename:'en/report-manager.html',
        template: './src/en/report-manager.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Investigación de Casos',
        hash:true,
        filename:'en/investigation-manager.html',
        template: './src/en/investigation-manager.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Seguimiento de Casos',
        hash:true,
        filename:'en/report-follow-up.html',
        template: './src/en/report-follow-up.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Elearning',
        hash:true,
        filename:'en/e-learning.html',
        template: './src/en/e-learning.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Campaña de Difusión de Ética Laboral',
        hash:true,
        filename:'en/awareness-campaign.html',
        template: './src/en/awareness-campaign.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Planes de Servicio de Sistema Ético de Denuncias',
        hash:true,
        filename:'en/service-plans.html',
        template: './src/en/service-plans.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Nuestra Fábrica de Software',
        hash:true,
        filename:'en/software-factory.html',
        template: './src/en/software-factory.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - PRIS',
        hash:true,
        filename:'en/predictive-research-intelligence-system.html',
        template: './src/en/predictive-research-intelligence-system.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Cómo implementamos un Sistema Ético de Denuncias',
        hash:true,
        filename:'en/implementation.html',
        template: './src/en/implementation.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Servicios Legales y de Investigación',
        hash:true,
        filename:'en/legal-and-investigation-services.html',
        template: './src/en/legal-and-investigation-services.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Seguridad y protección ',
        hash:true,
        filename:'en/data-protection-and-security.html',
        template: './src/en/data-protection-and-security.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Contactos',
        hash:true,
        filename:'en/contactos.html',
        template: './src/en/contactos.pug',
      }),

      new HtmlWebpackPlugin({
      title: 'Privacy Notice for Clients and Providers',
      hash:true,
      filename:'en/privacy-and-policy.html',
      template: './src/en/privacy-and-policy.pug',
      }),

      new HtmlWebpackPlugin({
      title: 'Obrigado',
      hash:true,
      filename:'en/thank-you.html',
      template: './src/en/gracias.pug',
      }),





 // pt  //
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Sistemas Éticos',
        hash:true,
        filename:'pt/index.html',
        template: './src/pt/index.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Nuestra Historia',
        hash:true,
        filename:'pt/Historia-de-Ethicsglobal.html',
        template: './src/pt/historia-de-ethics-global.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -Acerca de nosotros',
        hash:true,
        filename:'pt/sobre-ethics-global.html',
        template: './src/pt/sobre-ethics-global.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Qué le ayuda a detectar el Sistema Ético de Denuncias',
        hash:true,
        filename:'pt/o-que-ajudamos-a-detectar.html',
        template: './src/pt/o-que-ajudamos-a-detectar.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Nuestros Clientes',
        hash:true,
        filename:'pt/nossos-clientes.html',
        template: './src/pt/nossos-clientes.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Qué beneficios obtiene',
        hash:true,
        filename:'pt/beneficios-do-nosso-servico.html',
        template: './src/pt/beneficios-do-nosso-servico.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Componentes de nuestro Sistema Ético de Denuncias',
        hash:true,
        filename:'pt/sistema-etico-de-denuncia.html',
        template: './src/pt/sistema-etico-de-denuncia.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal -  Canales de Reporte',
        hash:true,
        filename:'pt/canais-da-linha-etica.html',
        template: './src/pt/canais-da-linha-etica.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Gestor de Casos Línea Ética',
        hash:true,
        filename:'pt/gestor-de-relatorios.html',
        template: './src/pt/gestor-de-relatorios.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Investigación de Casos',
        hash:true,
        filename:'pt/gestor-de-pesquisa.html',
        template: './src/pt/gestor-de-pesquisa.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Seguimiento de Casos',
        hash:true,
        filename:'pt/rastreamento-de-relatorios.html',
        template: './src/pt/rastreamento-de-relatorios.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Elearning',
        hash:true,
        filename:'pt/e-learning.html',
        template: './src/pt/e-learning.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Campaña de Difusión de Ética Laboral',
        hash:true,
        filename:'pt/campanhas-de-divulgacao.html',
        template: './src/pt/campanhas-de-divulgacao.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Planes de Servicio de Sistema Ético de Denuncias',
        hash:true,
        filename:'pt/planos-de-servico.html',
        template: './src/pt/planos-de-servico.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Nuestra Fábrica de Software',
        hash:true,
        filename:'pt/fabrica-de-software.html',
        template: './src/pt/fabrica-de-software.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - PRIS',
        hash:true,
        filename:'pt/investigacao-preditiva.html',
        template: './src/pt/investigacao-preditiva.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Cómo implementamos un Sistema Ético de Denuncias',
        hash:true,
        filename:'pt/implementacao.html',
        template: './src/pt/implementacao.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Servicios Legales y de Investigación',
        hash:true,
        filename:'pt/servicos-legais-e-de-investigacao.html',
        template: './src/pt/servicos-legais-e-de-investigacao.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Seguridad y protección ',
        hash:true,
        filename:'pt/seguranca-e-protecao-da-informacao.html',
        template: './src/pt/seguranca-e-protecao-da-informacao.pug',
      }),
      new HtmlWebpackPlugin({
        title: 'EthicsGlobal - Contactos',
        hash:true,
        filename:'pt/contactos.html',
        template: './src/pt/contactos.pug',
      }),

      new HtmlWebpackPlugin({
      title: 'Obrigado',
      hash:true,
      filename:'pt/obrigado.html',
      template: './src/pt/gracias.pug',
      }),



        new ExtractTextPlugin("style/style.css"),


      ]
}
