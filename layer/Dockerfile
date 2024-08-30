FROM public.ecr.aws/lambda/provided:latest

#
# versions
#

ARG WGET_VERSION=1.21.4
ARG NETTLE_VERSION=3.6
ARG PCRE_VERSION=8.45

USER root
RUN mkdir -p /opt
WORKDIR /tmp

#
# tools
#

RUN dnf install -y make automake gcc gcc-c++ \
    && dnf install -y openssl-devel gnutls-devel \
    && dnf install -y zip unzip wget tar gzip

#
# pcre 
#

RUN wget https://ftp.exim.org/pub/pcre/pcre-${PCRE_VERSION}.tar.gz
RUN tar -xzvf pcre-${PCRE_VERSION}.tar.gz
RUN cd pcre-${PCRE_VERSION} && ./configure --prefix=/opt && make && make install \
    && chmod -v 755 /opt/lib/libpcre.so.1

#
# nettle
#

RUN wget https://ftp.gnu.org/gnu/nettle/nettle-${NETTLE_VERSION}.tar.gz
RUN tar -xzvf nettle-${NETTLE_VERSION}.tar.gz
RUN cd nettle-${NETTLE_VERSION} && ./configure --prefix=/opt && make && make install \
    && chmod -v 755 /opt/lib64/libnettle.so

#
# wget
#

RUN wget https://ftp.gnu.org/gnu/wget/wget-${WGET_VERSION}.tar.gz
RUN tar -xzvf wget-${WGET_VERSION}.tar.gz
RUN cd wget-${WGET_VERSION} && ./configure --with-ssl=openssl --prefix=/opt && make && make install

#
# create the bundle
#

RUN cd /opt \
    && zip --symlinks -r ../layer.zip * \
    && echo "/layer.zip is ready" \
    && ls -alh /layer.zip;

WORKDIR /
ENTRYPOINT [ "/bin/bash" ]
