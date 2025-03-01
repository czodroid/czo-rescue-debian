FROM debian:12

RUN apt-get update
RUN apt-get -y install vim tmux rsync curl syslinux-efi grub-pc-bin grub-efi-amd64-bin grub-efi-ia32-bin isolinux mtools dosfstools bash coreutils debootstrap squashfs-tools libarchive-tools xorriso isomd5sum make
RUN cd /root; curl -fsSL https://raw.githubusercontent.com/czodroid/dotfiles/master/config-fast-copy | sh
WORKDIR /workspace
