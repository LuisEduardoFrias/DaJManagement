import Icon from '@/components/icon/icon';

class Plate {
	name: string;
	lastname: string;
	constructor(name: string, lastname: string) {
		this.name = name;
		this.lastname = lastname;
	}
}

class Table {
	name: string;
	number: number;
	constructor(name: string, number: number) {
		this.name = name;
		this.number = number;
	}
}

export default function Add() {
	// const res1 = await daj.postAsync(new Plate('jose', 'guerra'));
	//	console.log(res1);

	// const res2 = await daj.postAsync(new Table('vip', 2));
	// 	console.log(res2);

	var miVariable = [1, 2, 3]; // Un arreglo

	if (typeof miVariable === 'object' && Array.isArray(miVariable)) {
		console.log('La variable es un arreglo');
	} else if (typeof miVariable === 'object') {
		console.log('La variable es un objeto');
	} else {
		console.log('La variable no es un arreglo ni un objeto');
	}
	return (
		<div className='p-1.5 pt-10 flex justify-center items-center'>
			<input
				placeholder='objet'
				className='border-black border-b-blue-700 border-2 text-white bg-black p-1.5'
			/>
			<button>
				<Icon iconName='list_alt_add' />
			</button>
			<button>
				<Icon iconName='edit_note' />
			</button>
			<button>
				<Icon iconName='contract_delete' />
			</button>
		</div>
	);
}
