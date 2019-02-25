##############################################################
# Note that this Dockerfile depends on the rest of the build
# process happening first on TravisCI.
# If you wish to build locally, replicate the setup in our
# .travis.yml before attempting a docker build.
##############################################################
FROM nginx:alpine

WORKDIR /opt/app

# Install app
COPY dist ./dist
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
