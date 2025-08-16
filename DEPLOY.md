# Чеклист развертывания cosmeya.art

## Первый запуск и получение SSL-сертификатов

```bash
# 1. Собрать и запустить все сервисы
docker compose build
docker compose up -d

# 2. Запустить скрипт инициализации SSL 
# ⚠️  ВАЖНО: DNS должны указывать на сервер!
./init-letsencrypt.sh

# 3. Перезапустить все сервисы с финальной конфигурацией
docker compose down
docker compose up -d
```

## Проверка работоспособности

- [ ] Проверить, что сайт доступен по https://cosmeya.art
- [ ] Проверить редирект с www.cosmeya.art на cosmeya.art
- [ ] Проверить редирект с HTTP на HTTPS
- [ ] Проверить SSL-сертификат (должен быть от Let's Encrypt)
- [ ] Проверить логи: `docker compose logs -f`

### Быстрая диагностика:
```bash
# Проверить статус контейнеров
docker compose ps

# Проверить health checks
docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"

# Тест SSL сертификата
curl -I https://cosmeya.art

# Тест редиректов
curl -I http://cosmeya.art
curl -I https://www.cosmeya.art
```

## Обновление проекта

```bash
# Для обновления кода
git pull origin master
docker compose build
docker compose up -d

# Для полной пересборки (при проблемах)
docker compose down
docker compose build --no-cache
docker compose up -d
```

## Мониторинг

```bash
# Просмотр логов
docker compose logs -f

# Просмотр статуса контейнеров
docker compose ps

# Мониторинг ресурсов
docker stats

# Проверка SSL сертификата
docker compose exec certbot certbot certificates
```

## Автообновление SSL (уже настроено)

Certbot автоматически обновляет сертификаты каждые 12 часов через Docker Compose.
Nginx перезагружается каждые 6 часов для применения новых сертификатов.

## Современные возможности (2025)

✅ **Docker Compose V2** - без version, современный синтаксис  
✅ **Node.js 20** - последняя LTS версия  
✅ **HTTP/2 и HTTP/3 ready** - современные протоколы  
✅ **AVIF и WebP** - современные форматы изображений  
✅ **Rate Limiting** - защита от DDoS  
✅ **Health Checks** - мониторинг состояния контейнеров  
✅ **Security Headers** - Content-Security-Policy, HSTS с preload  
✅ **OCSP Stapling** - ускоренная проверка SSL  
✅ **TLS 1.3** - современное шифрование

## Npm скрипты

```bash
# Локальная разработка
npm run dev

# Docker команды
npm run docker:build
npm run docker:up
npm run docker:down
npm run docker:logs

# Проверка типов и линтинг
npm run type-check
npm run lint:fix
```

## Резервное копирование

```bash
# Создать бэкап сертификатов
sudo tar -czf ssl-backup-$(date +%Y%m%d).tar.gz certbot/

# Восстановить из бэкапа при необходимости
sudo tar -xzf ssl-backup-YYYYMMDD.tar.gz
```

## Решение проблем

### Если SSL не работает:
1. Проверить, что DNS записи настроены правильно
2. Убедиться, что порты 80 и 443 открыты в файрволе
3. Проверить логи: `docker compose logs certbot`

### Если сайт не загружается:
1. Проверить статус контейнеров: `docker compose ps`
2. Проверить логи приложения: `docker compose logs app`
3. Проверить логи nginx: `docker compose logs nginx`

### Диагностика проблем:
```bash
# Проверить доступность портов
netstat -tlnp | grep -E ':80|:443'

# Проверить DNS
nslookup cosmeya.art
nslookup www.cosmeya.art

# Проверить файрволл (Ubuntu/Debian)
sudo ufw status

# Проверить файрволл (CentOS/RHEL)
sudo firewall-cmd --list-all
```
