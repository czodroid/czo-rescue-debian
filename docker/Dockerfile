# Filename: Dockerfile
# Author: Olivier Sirol <czo@free.fr>
# License: GPL-2.0 (http://www.gnu.org/copyleft)
# File Created: 03 February 2025
# Last Modified: Wednesday 13 August 2025, 17:27
# $Id: Dockerfile,v 1.42 2025/08/13 17:27:45 czo Git $
# Edit Time: 0:43:12
# Description:
#
#        docker file for czo-rescue-debian
#
# Copyright: (C) 2025 Olivier Sirol <czo@free.fr>

FROM debian:13

RUN apt-get update
RUN apt-get -y install aptitude vim tmux rsync zsh make curl xz-utils syslinux-efi grub-pc grub-pc-bin grub-efi-amd64-bin grub-efi-ia32-bin isolinux mtools dosfstools bash coreutils debootstrap squashfs-tools libarchive-tools xorriso isomd5sum
RUN cd /root; curl -fsSL https://raw.githubusercontent.com/czodroid/dotfiles/master/config-fast-copy | sh
WORKDIR /workspace

