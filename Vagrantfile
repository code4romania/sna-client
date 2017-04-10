# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "sna"
  config.vm.network :private_network, type: "dhcp"
  config.vm.network "forwarded_port", guest: 3000, host: 8000
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--name", "sna", "--memory", "1024"]
  end

  config.vm.synced_folder "../sna-client/", "/var/www/sna-client"
  config.ssh.insert_key = true
  config.ssh.forward_agent = true

  # Ansible provisioner.
  config.vm.provision "ansible" do |ansible|
    ansible.groups = {
        "development" => ["default"]
    }
    ansible.playbook = "ansible/vagrant.yml"
    ansible.host_key_checking = false
    ansible.raw_arguments = ["--timeout=100"]
  end
end
