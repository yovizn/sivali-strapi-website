import type { Struct, Schema } from '@strapi/strapi';

export interface WebsiteSectionJobRolesSection extends Struct.ComponentSchema {
  collectionName: 'components_website_section_job_roles_sections';
  info: {
    displayName: 'Job Roles Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    card: Schema.Attribute.Component<'organism-website.card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface WebsiteSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_website_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'atom-website.button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 2;
        },
        number
      >;
  };
}

export interface WebsiteSectionContactSection extends Struct.ComponentSchema {
  collectionName: 'components_website_section_contact_sections';
  info: {
    displayName: 'Contact Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.Component<'atom-website.button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface WebsiteSectionBenefitSection extends Struct.ComponentSchema {
  collectionName: 'components_website_section_benefit_sections';
  info: {
    displayName: 'Benefit Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    benefitCard: Schema.Attribute.Component<
      'organism-website.benefit-card',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    stepTitle: Schema.Attribute.String & Schema.Attribute.Required;
    stepCard: Schema.Attribute.Component<'organism-website.step-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface OrganismWebsiteDashboardTable extends Struct.ComponentSchema {
  collectionName: 'components_organism_website_dashboard_tables';
  info: {
    displayName: 'Table';
    description: '';
  };
  attributes: {
    idTable: Schema.Attribute.String & Schema.Attribute.Required;
    dateTable: Schema.Attribute.String & Schema.Attribute.Required;
    nameTable: Schema.Attribute.String & Schema.Attribute.Required;
    amountTable: Schema.Attribute.String & Schema.Attribute.Required;
    statusTable: Schema.Attribute.String & Schema.Attribute.Required;
    footerTable: Schema.Attribute.Component<
      'molecule-website-dashboard.footer-table',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface OrganismWebsiteDashboardListAttendanceTable
  extends Struct.ComponentSchema {
  collectionName: 'components_organism_website_dashboard_list_attendance_tables';
  info: {
    displayName: 'List Attendance Table';
    description: '';
  };
  attributes: {
    idListAttendance: Schema.Attribute.String & Schema.Attribute.Required;
    nameListAttendance: Schema.Attribute.String & Schema.Attribute.Required;
    date: Schema.Attribute.String & Schema.Attribute.Required;
    shift: Schema.Attribute.String & Schema.Attribute.Required;
    checkIn: Schema.Attribute.String & Schema.Attribute.Required;
    checkOut: Schema.Attribute.String & Schema.Attribute.Required;
    jobName: Schema.Attribute.String;
    jobDescription: Schema.Attribute.String & Schema.Attribute.Required;
    locaitionIn: Schema.Attribute.String & Schema.Attribute.Required;
    locationOut: Schema.Attribute.String & Schema.Attribute.Required;
    photoIn: Schema.Attribute.String & Schema.Attribute.Required;
    photoOut: Schema.Attribute.String;
    action: Schema.Attribute.String & Schema.Attribute.Required;
    actionView: Schema.Attribute.String & Schema.Attribute.Required;
    footerTable: Schema.Attribute.Component<
      'molecule-website-dashboard.footer-table',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface OrganismWebsiteDashboardJobPostingTable
  extends Struct.ComponentSchema {
  collectionName: 'components_organism_website_dashboard_job_posting_tables';
  info: {
    displayName: 'Job Posting Table';
    description: '';
  };
  attributes: {
    idPosting: Schema.Attribute.String & Schema.Attribute.Required;
    job: Schema.Attribute.String & Schema.Attribute.Required;
    experience: Schema.Attribute.String & Schema.Attribute.Required;
    education: Schema.Attribute.String & Schema.Attribute.Required;
    term: Schema.Attribute.String & Schema.Attribute.Required;
    jobDescription: Schema.Attribute.String & Schema.Attribute.Required;
    action: Schema.Attribute.String & Schema.Attribute.Required;
    actionView: Schema.Attribute.String & Schema.Attribute.Required;
    actionEdit: Schema.Attribute.String & Schema.Attribute.Required;
    actionRemove: Schema.Attribute.String & Schema.Attribute.Required;
    footerTable: Schema.Attribute.Component<
      'molecule-website-dashboard.footer-table',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface OrganismWebsiteDashboardHeaderTitle
  extends Struct.ComponentSchema {
  collectionName: 'components_organism_website_dashboard_header_titles';
  info: {
    displayName: 'Header Title';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MoleculeWebsiteDashboardFooterTable
  extends Struct.ComponentSchema {
  collectionName: 'components_molecule_website_dashboard_footer_tables';
  info: {
    displayName: 'Footer Table';
    description: '';
  };
  attributes: {
    previousButton: Schema.Attribute.String & Schema.Attribute.Required;
    nextButton: Schema.Attribute.String & Schema.Attribute.Required;
    infoTable: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MoleculeWebsitePlaceholder extends Struct.ComponentSchema {
  collectionName: 'components_molecule_website_placeholders';
  info: {
    displayName: 'Placeholder';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface MoleculeWebsiteInput extends Struct.ComponentSchema {
  collectionName: 'components_molecule_website_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
  };
}

export interface AtomWebsiteDashboardButton extends Struct.ComponentSchema {
  collectionName: 'components_atom_website_dashboard_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OrganismWebsiteStepCard extends Struct.ComponentSchema {
  collectionName: 'components_organism_website_step_cards';
  info: {
    displayName: 'Step Card';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface OrganismWebsiteCard extends Struct.ComponentSchema {
  collectionName: 'components_organism_website_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    cardHeader: Schema.Attribute.Component<
      'molecule-website.placeholder',
      false
    > &
      Schema.Attribute.Required;
    badge: Schema.Attribute.Component<'atom-website.placeholder', true>;
  };
}

export interface OrganismWebsiteBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_organism_website_benefit_cards';
  info: {
    displayName: 'Benefit Card';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface AtomWebsitePlaceholder extends Struct.ComponentSchema {
  collectionName: 'components_atom_website_placeholders';
  info: {
    displayName: 'Placeholder';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AtomWebsiteButton extends Struct.ComponentSchema {
  collectionName: 'components_atom_website_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'website-section.job-roles-section': WebsiteSectionJobRolesSection;
      'website-section.hero-section': WebsiteSectionHeroSection;
      'website-section.contact-section': WebsiteSectionContactSection;
      'website-section.benefit-section': WebsiteSectionBenefitSection;
      'organism-website-dashboard.table': OrganismWebsiteDashboardTable;
      'organism-website-dashboard.list-attendance-table': OrganismWebsiteDashboardListAttendanceTable;
      'organism-website-dashboard.job-posting-table': OrganismWebsiteDashboardJobPostingTable;
      'organism-website-dashboard.header-title': OrganismWebsiteDashboardHeaderTitle;
      'molecule-website-dashboard.footer-table': MoleculeWebsiteDashboardFooterTable;
      'molecule-website.placeholder': MoleculeWebsitePlaceholder;
      'molecule-website.input': MoleculeWebsiteInput;
      'atom-website-dashboard.button': AtomWebsiteDashboardButton;
      'organism-website.step-card': OrganismWebsiteStepCard;
      'organism-website.card': OrganismWebsiteCard;
      'organism-website.benefit-card': OrganismWebsiteBenefitCard;
      'atom-website.placeholder': AtomWebsitePlaceholder;
      'atom-website.button': AtomWebsiteButton;
    }
  }
}
