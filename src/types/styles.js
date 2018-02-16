// @flow

export type StylesType = {
	[key: string]: {
		[key: string]: string | number | Object,
	},
};

export type ClassesType = { [key: string]: string };

type ThemeValueType = string | number;

export type ThemeType = {
	[key: string]: ThemeValueType,
	spacing: {
		[key: string]: ThemeValueType,
		unit: number,
	},
	transitions: {
		[key: string]: ThemeValueType,
		easing: {
			sharp: ThemeValueType,
			easeOut: ThemeValueType,
			easeOut: ThemeValueType,
		},
		duration: {
			leavingScreen: ThemeValueType,
			enteringScreen: ThemeValueType,
			shortest: ThemeValueType,
		},
		create: (Array<string> | string, ?Object) => ThemeValueType,
	},
	mixins: {
		toolbar: {
			[key: string]: ThemeValueType,
		},
	},
	zIndex: {
		[key: string]: ThemeValueType,
	},
	palette: {
		primary: {
			[key: string]: ThemeValueType,
		},
		common: {
			[key: string]: ThemeValueType,
		},
		text: {
			[key: string]: ThemeValueType,
		},
		background: {
			[key: string]: ThemeValueType,
		},
	},
	breakpoints: {
		up: (value: string) => ThemeValueType,
	},
	typography: {
		pxToRem: (value: number) => ThemeValueType,
	},
};