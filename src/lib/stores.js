import { writable } from 'svelte/store';

export let navbar = writable({ absolute: false });
export let prices = writable({});
