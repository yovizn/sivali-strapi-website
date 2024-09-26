import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiCompanyWebsiteCompanyWebsite
  extends Struct.SingleTypeSchema {
  collectionName: 'company_websites';
  info: {
    singularName: 'company-website';
    pluralName: 'company-websites';
    displayName: 'Company Website';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heroSection: Schema.Attribute.Component<
      'website-section.hero-section',
      false
    > &
      Schema.Attribute.Required;
    jobRoleSection: Schema.Attribute.Component<
      'website-section.job-roles-section',
      false
    > &
      Schema.Attribute.Required;
    benefitSection: Schema.Attribute.Component<
      'website-section.benefit-section',
      false
    > &
      Schema.Attribute.Required;
    contactSection: Schema.Attribute.Component<
      'website-section.contact-section',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-website.company-website'
    >;
  };
}

export interface ApiCreateEditCompanyCreateEditCompany
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_companies';
  info: {
    singularName: 'create-edit-company';
    pluralName: 'create-edit-companies';
    displayName: 'Create / Edit Company Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    salary: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    quota: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    submitButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-company.create-edit-company'
    >;
  };
}

export interface ApiCreateEditEducationCreateEditEducation
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_educations';
  info: {
    singularName: 'create-edit-education';
    pluralName: 'create-edit-educations';
    displayName: 'Create / Edit Education Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    education: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    submitButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-education.create-edit-education'
    >;
  };
}

export interface ApiCreateEditEmployeeCreateEditEmployee
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_employees';
  info: {
    singularName: 'create-edit-employee';
    pluralName: 'create-edit-employees';
    displayName: 'Create / Edit Employee Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    salary: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    quota: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    submitButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-employee.create-edit-employee'
    >;
  };
}

export interface ApiCreateEditIndustryCreateEditIndustry
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_industries';
  info: {
    singularName: 'create-edit-industry';
    pluralName: 'create-edit-industries';
    displayName: 'Create / Edit Industry Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    industry: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    submitButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-industry.create-edit-industry'
    >;
  };
}

export interface ApiCreateEditJobCategoryDashboardCreateEditJobCategoryDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_job_category_dashboards';
  info: {
    singularName: 'create-edit-job-category-dashboard';
    pluralName: 'create-edit-job-category-dashboards';
    displayName: 'Create / Edit Job Category Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jobCategory: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    submitButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-job-category-dashboard.create-edit-job-category-dashboard'
    >;
  };
}

export interface ApiCreateEditJobDashboardCreateEditJobDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_job_dashboards';
  info: {
    singularName: 'create-edit-job-dashboard';
    pluralName: 'create-edit-job-dashboards';
    displayName: 'Create / Edit Job Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    titleForm: Schema.Attribute.String & Schema.Attribute.Required;
    companyName: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    jobType: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    jobName: Schema.Attribute.Component<'molecule-website.input', false>;
    jobCategoryDropdown: Schema.Attribute.Component<
      'molecule-website.input',
      false
    > &
      Schema.Attribute.Required;
    jobTItleDropdown: Schema.Attribute.Component<
      'molecule-website.input',
      false
    > &
      Schema.Attribute.Required;
    jobSpecializationDropdown: Schema.Attribute.Component<
      'molecule-website.input',
      false
    > &
      Schema.Attribute.Required;
    lastEducationDropdown: Schema.Attribute.Component<
      'molecule-website.input',
      false
    > &
      Schema.Attribute.Required;
    genderDropdown: Schema.Attribute.Component<
      'molecule-website.input',
      false
    > &
      Schema.Attribute.Required;
    studyDropdown: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    experience: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    skill: Schema.Attribute.Component<'molecule-website.input', false>;
    jobDescriptionDropdown: Schema.Attribute.Component<
      'molecule-website.input',
      false
    >;
    quota: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    minimumQualification: Schema.Attribute.Component<
      'molecule-website.input',
      false
    > &
      Schema.Attribute.Required;
    picName: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    picPhoneNumber: Schema.Attribute.Component<
      'molecule-website.input',
      false
    > &
      Schema.Attribute.Required;
    salary: Schema.Attribute.Component<'molecule-website.input', false>;
    province: Schema.Attribute.Component<'molecule-website.input', false>;
    city: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    district: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    village: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    address: Schema.Attribute.Component<'molecule-website.input', false>;
    jobPeriod: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    startPosting: Schema.Attribute.Component<'molecule-website.input', false>;
    addressTitle: Schema.Attribute.String & Schema.Attribute.Required;
    gender: Schema.Attribute.Component<'molecule-website.input', false>;
    gender2: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    shift: Schema.Attribute.String & Schema.Attribute.Required;
    shiftButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    shiftIn: Schema.Attribute.String & Schema.Attribute.Required;
    shiftOut: Schema.Attribute.String;
    shiftQuota: Schema.Attribute.String & Schema.Attribute.Required;
    shiftAction: Schema.Attribute.String;
    shiftActionButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    submitButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-job-dashboard.create-edit-job-dashboard'
    >;
  };
}

export interface ApiCreateEditJobRoleDashboardCreateEditJobRoleDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_job_role_dashboards';
  info: {
    singularName: 'create-edit-job-role-dashboard';
    pluralName: 'create-edit-job-role-dashboards';
    displayName: 'Create / Edit Job Role Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jobRole: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    submitButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-job-role-dashboard.create-edit-job-role-dashboard'
    >;
  };
}

export interface ApiCreateEditJobSpecializationDashboardCreateEditJobSpecializationDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_job_specialization_dashboards';
  info: {
    singularName: 'create-edit-job-specialization-dashboard';
    pluralName: 'create-edit-job-specialization-dashboards';
    displayName: 'Create / Edit Job Specialization Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jobSpecialization: Schema.Attribute.Component<
      'molecule-website.input',
      false
    > &
      Schema.Attribute.Required;
    submitButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-job-specialization-dashboard.create-edit-job-specialization-dashboard'
    >;
  };
}

export interface ApiCreateEditTransactionCreateEditTransaction
  extends Struct.SingleTypeSchema {
  collectionName: 'create_edit_transactions';
  info: {
    singularName: 'create-edit-transaction';
    pluralName: 'create-edit-transactions';
    displayName: 'Create / Edit Transaction Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    salary: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    quota: Schema.Attribute.Component<'molecule-website.input', false> &
      Schema.Attribute.Required;
    topUpCreaditButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    >;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::create-edit-transaction.create-edit-transaction'
    >;
  };
}

export interface ApiEmployeeWebsiteEmployeeWebsite
  extends Struct.SingleTypeSchema {
  collectionName: 'employee_websites';
  info: {
    singularName: 'employee-website';
    pluralName: 'employee-websites';
    displayName: 'Employee Website';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    heroSection: Schema.Attribute.Component<
      'website-section.hero-section',
      false
    > &
      Schema.Attribute.Required;
    jobRoleSection: Schema.Attribute.Component<
      'website-section.job-roles-section',
      false
    >;
    benefitSection: Schema.Attribute.Component<
      'website-section.benefit-section',
      false
    > &
      Schema.Attribute.Required;
    contactSection: Schema.Attribute.Component<
      'website-section.contact-section',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::employee-website.employee-website'
    >;
  };
}

export interface ApiHomeDashboardHomeDashboard extends Struct.SingleTypeSchema {
  collectionName: 'home_dashboards';
  info: {
    singularName: 'home-dashboard';
    pluralName: 'home-dashboards';
    displayName: 'Home Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    chartTitle: Schema.Attribute.String;
    creditTransaction: Schema.Attribute.String & Schema.Attribute.Required;
    creditBalance: Schema.Attribute.String & Schema.Attribute.Required;
    candidate: Schema.Attribute.String & Schema.Attribute.Required;
    attendance: Schema.Attribute.String & Schema.Attribute.Required;
    jobPost: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-dashboard.home-dashboard'
    >;
  };
}

export interface ApiJobPostingDashboardJobPostingDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'job_posting_dashboards';
  info: {
    singularName: 'job-posting-dashboard';
    pluralName: 'job-posting-dashboards';
    displayName: 'Job Posting Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    createNewJobButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    partTime: Schema.Attribute.String & Schema.Attribute.Required;
    partTimeTable: Schema.Attribute.Component<
      'organism-website-dashboard.job-posting-table',
      false
    > &
      Schema.Attribute.Required;
    draft: Schema.Attribute.String & Schema.Attribute.Required;
    draftTable: Schema.Attribute.Component<
      'organism-website-dashboard.job-posting-table',
      false
    >;
    postExpired: Schema.Attribute.String & Schema.Attribute.Required;
    postExpiredTable: Schema.Attribute.Component<
      'organism-website-dashboard.job-posting-table',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::job-posting-dashboard.job-posting-dashboard'
    >;
  };
}

export interface ApiListAttendanceListAttendance
  extends Struct.SingleTypeSchema {
  collectionName: 'list_attendances';
  info: {
    singularName: 'list-attendance';
    pluralName: 'list-attendances';
    displayName: 'List Attendance Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fullTIme: Schema.Attribute.String & Schema.Attribute.Required;
    fullTImeTable: Schema.Attribute.Component<
      'organism-website-dashboard.list-attendance-table',
      false
    >;
    partTime: Schema.Attribute.String & Schema.Attribute.Required;
    partTimeTable: Schema.Attribute.Component<
      'organism-website-dashboard.list-attendance-table',
      false
    >;
    Heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-attendance.list-attendance'
    >;
  };
}

export interface ApiListCompanyDashboardListCompanyDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'list_company_dashboards';
  info: {
    singularName: 'list-company-dashboard';
    pluralName: 'list-company-dashboards';
    displayName: 'List Company Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createNewCompanyButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    companyTable: Schema.Attribute.Component<
      'organism-website-dashboard.table',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-company-dashboard.list-company-dashboard'
    >;
  };
}

export interface ApiListEducationDashboardListEducationDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'list_education_dashboards';
  info: {
    singularName: 'list-education-dashboard';
    pluralName: 'list-education-dashboards';
    displayName: 'List Education Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createNewEducationButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    educationTable: Schema.Attribute.Component<
      'organism-website-dashboard.table',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-education-dashboard.list-education-dashboard'
    >;
  };
}

export interface ApiListEmpolyeeDashboardListEmpolyeeDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'list_empolyee_dashboards';
  info: {
    singularName: 'list-empolyee-dashboard';
    pluralName: 'list-empolyee-dashboards';
    displayName: 'List Empolyee Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createNewEmployeeButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    employeeTable: Schema.Attribute.Component<
      'organism-website-dashboard.table',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-empolyee-dashboard.list-empolyee-dashboard'
    >;
  };
}

export interface ApiListIndustryListIndustry extends Struct.SingleTypeSchema {
  collectionName: 'list_industries';
  info: {
    singularName: 'list-industry';
    pluralName: 'list-industries';
    displayName: 'List Industry Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createNewIndustryButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    industryTable: Schema.Attribute.Component<
      'organism-website-dashboard.table',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-industry.list-industry'
    >;
  };
}

export interface ApiListJobCategoryListJobCategory
  extends Struct.SingleTypeSchema {
  collectionName: 'list_job_categories';
  info: {
    singularName: 'list-job-category';
    pluralName: 'list-job-categories';
    displayName: 'List Job Category Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createNewJobCategoryButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    jobCategoryTable: Schema.Attribute.Component<
      'organism-website-dashboard.table',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-job-category.list-job-category'
    >;
  };
}

export interface ApiListJobRoleListJobRole extends Struct.SingleTypeSchema {
  collectionName: 'list_job_roles';
  info: {
    singularName: 'list-job-role';
    pluralName: 'list-job-roles';
    displayName: 'List Job Role Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createNewJobRoleButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    jobRoleTable: Schema.Attribute.Component<
      'organism-website-dashboard.table',
      false
    >;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-job-role.list-job-role'
    >;
  };
}

export interface ApiListJobSpecializationsDashboardListJobSpecializationsDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'list_job_specializations_dashboards';
  info: {
    singularName: 'list-job-specializations-dashboard';
    pluralName: 'list-job-specializations-dashboards';
    displayName: 'List Job Specializations Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createJobSpecializationsButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    jobSpecializationsTable: Schema.Attribute.Component<
      'organism-website-dashboard.table',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-job-specializations-dashboard.list-job-specializations-dashboard'
    >;
  };
}

export interface ApiListTransactionDashboardListTransactionDashboard
  extends Struct.SingleTypeSchema {
  collectionName: 'list_transaction_dashboards';
  info: {
    singularName: 'list-transaction-dashboard';
    pluralName: 'list-transaction-dashboards';
    displayName: 'List Transaction Dashboard';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createNewTransactionButton: Schema.Attribute.Component<
      'atom-website-dashboard.button',
      false
    > &
      Schema.Attribute.Required;
    transactionTable: Schema.Attribute.Component<
      'organism-website-dashboard.table',
      false
    > &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Component<
      'organism-website-dashboard.header-title',
      false
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::list-transaction-dashboard.list-transaction-dashboard'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::company-website.company-website': ApiCompanyWebsiteCompanyWebsite;
      'api::create-edit-company.create-edit-company': ApiCreateEditCompanyCreateEditCompany;
      'api::create-edit-education.create-edit-education': ApiCreateEditEducationCreateEditEducation;
      'api::create-edit-employee.create-edit-employee': ApiCreateEditEmployeeCreateEditEmployee;
      'api::create-edit-industry.create-edit-industry': ApiCreateEditIndustryCreateEditIndustry;
      'api::create-edit-job-category-dashboard.create-edit-job-category-dashboard': ApiCreateEditJobCategoryDashboardCreateEditJobCategoryDashboard;
      'api::create-edit-job-dashboard.create-edit-job-dashboard': ApiCreateEditJobDashboardCreateEditJobDashboard;
      'api::create-edit-job-role-dashboard.create-edit-job-role-dashboard': ApiCreateEditJobRoleDashboardCreateEditJobRoleDashboard;
      'api::create-edit-job-specialization-dashboard.create-edit-job-specialization-dashboard': ApiCreateEditJobSpecializationDashboardCreateEditJobSpecializationDashboard;
      'api::create-edit-transaction.create-edit-transaction': ApiCreateEditTransactionCreateEditTransaction;
      'api::employee-website.employee-website': ApiEmployeeWebsiteEmployeeWebsite;
      'api::home-dashboard.home-dashboard': ApiHomeDashboardHomeDashboard;
      'api::job-posting-dashboard.job-posting-dashboard': ApiJobPostingDashboardJobPostingDashboard;
      'api::list-attendance.list-attendance': ApiListAttendanceListAttendance;
      'api::list-company-dashboard.list-company-dashboard': ApiListCompanyDashboardListCompanyDashboard;
      'api::list-education-dashboard.list-education-dashboard': ApiListEducationDashboardListEducationDashboard;
      'api::list-empolyee-dashboard.list-empolyee-dashboard': ApiListEmpolyeeDashboardListEmpolyeeDashboard;
      'api::list-industry.list-industry': ApiListIndustryListIndustry;
      'api::list-job-category.list-job-category': ApiListJobCategoryListJobCategory;
      'api::list-job-role.list-job-role': ApiListJobRoleListJobRole;
      'api::list-job-specializations-dashboard.list-job-specializations-dashboard': ApiListJobSpecializationsDashboardListJobSpecializationsDashboard;
      'api::list-transaction-dashboard.list-transaction-dashboard': ApiListTransactionDashboardListTransactionDashboard;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
