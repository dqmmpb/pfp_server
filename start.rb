#!/usr/bin/env ruby

require 'fileutils'

def getpid(f)
  File.exists?(f) ? IO.read(f) : nil
end

puts `pwd`
pid2 = getpid 'logs/nginx.pid'

def pid
  getpid 'logs/nginx.pid'
end

def stop()
  puts `kill -QUIT #{pid}` if pid
end

def restart()
  puts `nginx -t -p .`
  pid.nil? ? puts('not found pid') : puts(`kill -HUP #{pid}`)
end

def start()
  puts `nginx -p . -t`
  puts `nginx -p .`
end

if ARGV[0] == "start"
  start
elsif ARGV[0] == 'restart'
  restart
elsif ARGV[0] == 'tt'
  puts `lemplate --compile templates/* lua/templates.lua`
elsif ARGV[0] == 'stop'
  stop
elsif ARGV[0] == 'dbg'
  stop
  FileUtils.rm('/usr/local/openresty/nginx/sbin/nginx')
  FileUtils.cp('/usr/local/openresty/nginx/sbin/nginx.dbg', '/usr/local/openresty/nginx/sbin/nginx')
  start
elsif ARGV[0] == 'norm'
  stop
  FileUtils.rm('/usr/local/openresty/nginx/sbin/nginx')
  FileUtils.cp('/usr/local/openresty/nginx/sbin/nginx.old', '/usr/local/openresty/nginx/sbin/nginx')
  start
else
  puts "not match"
end

puts '-' * 25
puts `ps aux | grep 'nginx'`
