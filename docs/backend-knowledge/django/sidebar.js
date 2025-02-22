module.exports = [
  {
    title: 'Django 基础知识',
    collapsable: true,
    children: [
      {
        title: 'model 字段与属性',
        path: '/backend-knowledge/django/django-model'
      },
      {
        title: 'model 外键关系',
        path: '/backend-knowledge/django/django-model-relationship'
      },
      {
        title: 'model 元数据 Meta',
        path: '/backend-knowledge/django/django-model-meta'
      },
      {
        title: 'model 的继承',
        path: '/backend-knowledge/django/django-model-inheritance'
      },
      {
        title: 'model 增删改操作',
        path: '/backend-knowledge/django/django-model-create-update-delete'
      },
      {
        title: 'model 查询/检索操作',
        path: '/backend-knowledge/django/django-model-retrieve'
      },
      {
        title: 'signal 监测 model 变化',
        path: '/backend-knowledge/django/django-signal'
      },
      {
        title: 'Django 内置权限系统使用',
        path: '/backend-knowledge/django/django-auth'
      },
    ]
  },
  {
    title: 'Django 实战经验',
    collapsable: true,
    children: [
      {
        title: 'Django 用户模型扩展/重写',
        path: '/backend-knowledge/django/django-user-model-extension'
      },
      {
        title: 'Django 内置权限系统扩展',
        path: '/backend-knowledge/django/django-auth-extension'
      },
      {
        title: 'Django 与 Guardian 的集成',
        path: '/backend-knowledge/django/django-guardian'
      },
      {
        title: 'Django+JWT 实现 Token 认证',
        path: '/backend-knowledge/django/django-jwt-auth'
      },
      {
        title: 'Django 设置 Redis 作为缓存',
        path: '/backend-knowledge/django/django-redis-cache'
      },
      {
        title: 'Django 与 Celery 的集成',
        path: '/backend-knowledge/django/django-integrate-celery'
      },
      {
        title: 'Django 与 Channels 的集成',
        path: '/backend-knowledge/django/django-integrate-channels'
      },
    ]
  },
  {
    title: 'Django 常见问题',
    collapsable: true,
    children: [
      {
        title: '导出/导入数据库表数据',
        path: '/backend-knowledge/django/dumpdata-and-loaddata'
      },
      {
        title: '执行 migrate 时报错 SQLite 版本过低',
        path: '/backend-knowledge/django/migrate-error-caused-by-sqlite3'
      },
    ]
  }
]
