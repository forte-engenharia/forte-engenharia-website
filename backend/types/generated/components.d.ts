import type { Schema, Attribute } from '@strapi/strapi';

export interface ServicosFotoServico extends Schema.Component {
  collectionName: 'components_componentes_foto_servicos';
  info: {
    displayName: 'FotoServico';
    description: '';
  };
  attributes: {
    imagem: Attribute.Media & Attribute.Required;
    tipoServico: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Reforma da \u00E1rea de lazer'>;
  };
}

export interface ServicosServicoPagina extends Schema.Component {
  collectionName: 'components_servicos_servico_paginas';
  info: {
    displayName: 'ServicoPagina';
    description: '';
  };
  attributes: {
    imagemInicial: Attribute.Media & Attribute.Required;
    tituloServicosPrestados: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Constru\u00EDmos experi\u00EAncias com excel\u00EAncia!'>;
    imagemFinal: Attribute.Media & Attribute.Required;
    tituloInicial: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Modernize e Revitalize: Descubra o Poder do Retrofit.'>;
    textoInicial: Attribute.RichText & Attribute.Required;
    textoFinal: Attribute.RichText & Attribute.Required;
    servicosPrestados: Attribute.Component<'servicos.servico-prestado', true> &
      Attribute.Required;
  };
}

export interface ServicosServicoPrestado extends Schema.Component {
  collectionName: 'components_servicos_servico_prestados';
  info: {
    displayName: 'ServicoPrestado';
  };
  attributes: {
    nome: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Edif\u00EDcio Solar D\u2019 Am\u00E9rica'>;
    descricao: Attribute.Text & Attribute.Required;
    fotos: Attribute.Component<'servicos.foto-servico', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'servicos.foto-servico': ServicosFotoServico;
      'servicos.servico-pagina': ServicosServicoPagina;
      'servicos.servico-prestado': ServicosServicoPrestado;
    }
  }
}
