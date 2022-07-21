import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HyphenFacet, HyphenFacetInterface } from "../../../src/Facets/HyphenFacet";
declare type HyphenFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HyphenFacet__factory extends ContractFactory {
    constructor(...args: HyphenFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<HyphenFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): HyphenFacet;
    connect(signer: Signer): HyphenFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612541806100206000396000f3fe6080604052600436106100345760003560e01c80630ee164e314610039578063290a4e061461005b5780638b6b29091461006e575b600080fd5b34801561004557600080fd5b50610059610054366004611c98565b610081565b005b610059610069366004611dc8565b61016e565b61005961007c366004611e74565b6102f3565b610089610443565b73ffffffffffffffffffffffffffffffffffffffff81166100d6576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fb4dba59cea9741f069693c5cc9e154fe2190cf9db6275fa7f1075a6a6c6668cc805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff00000000000000000000000000000000000000009091168117825560408051918252517f07c29719a900a2c32a205ea98aa7b062bedabe069c549f2b056fbf9ca2f8279d9181900360200190a15050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101e9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556102006101f986611f4c565b8585610513565b602083015261020e82610617565b84357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c461023e6020880188611ff8565b61024e60608a0160408b01611c98565b8888600081811061026157610261612064565b90506020028101906102739190612093565b610284906060810190604001611c98565b61029460a08c0160808d01611c98565b88604001518b8b60008181106102ac576102ac612064565b90506020028101906102be9190612093565b608001358a60600151600160006040516102e19a999897969594939291906120d1565b60405180910390a26000905550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561038c6103826020840184611c98565b83602001356107f7565b6103a361039e368490038401846121e8565b610617565b82357f438f81f3fe94456cd9d98e9073524f1c2bafb3ce75def8ced69f708061ddd5c46103d36020860186611ff8565b6103e36060880160408901611c98565b6103f06020880188611c98565b61040060a08a0160808b01611c98565b61041060608a0160408b01611c98565b89602001358a606001356000806040516104339a999897969594939291906120d1565b60405180910390a2600090555050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610511576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f657200000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b565b60008180820361054f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000848461055e600182612233565b81811061056d5761056d612064565b905060200281019061057f9190612093565b610590906080810190606001611c98565b9050600061059d82610819565b90506105aa8787876108d2565b60006105b583610819565b90508181116105c457806105ce565b6105ce8282612233565b91508160000361060a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50925050505b9392505050565b60608101517fb4dba59cea9741f069693c5cc9e154fe2190cf9db6275fa7f1075a6a6c6668cc904603610676576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815173ffffffffffffffffffffffffffffffffffffffff161561075c578151815460208401516106bd929173ffffffffffffffffffffffffffffffffffffffff1690610caa565b805460608301518351604080860151602087015191517f55d7359500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909516946355d735959461072694909390929160040161224a565b600060405180830381600087803b15801561074057600080fd5b505af1158015610754573d6000803e3d6000fd5b505050505050565b80546020830151604080850151606086015191517fea36842100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9094169363ea36842193926107c092916004016122c3565b6000604051808303818588803b1580156107d957600080fd5b505af11580156107ed573d6000803e3d6000fd5b50505050505b5050565b6107f3828273ffffffffffffffffffffffffffffffffffffffff821615610dec565b600073ffffffffffffffffffffffffffffffffffffffff8216156108ca576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156108a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c59190612322565b6108cc565b475b92915050565b81818060018114610b5f5760006108e98484610f06565b9050600084846108fa600186612233565b81811061090957610909612064565b905060200281019061091b9190612093565b61092c906080810190606001611c98565b90506000805b87811015610a7a573689898381811061094d5761094d612064565b905060200281019061095f9190612093565b90506000806109746040840160208501611c98565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1680156109e057506000806109b56020840184611c98565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610a255750600160006109f860a0840184611ff8565b610a079160089160009161233b565b610a1091612365565b815260208101919091526040016000205460ff165b610a5b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a51610a679082611027565b5080610a72816123a1565b915050610932565b5060005b610a89600186612233565b811015610b56576000878783818110610aa457610aa4612064565b9050602002810190610ab69190612093565b610ac7906080810190606001611c98565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b025750610b44565b848281518110610b1457610b14612064565b6020026020010151610b2582610819565b610b2f9190612233565b92508215610b4257610b428133856112fb565b505b80610b4e816123a1565b915050610a7e565b50505050610754565b60005b848110156107ed5736868683818110610b7d57610b7d612064565b9050602002810190610b8f9190612093565b9050600080610ba46040840160208501611c98565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff168015610c105750600080610be56020840184611c98565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff165b8015610c55575060016000610c2860a0840184611ff8565b610c379160089160009161233b565b610c4091612365565b815260208101919091526040016000205460ff165b610c8b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8751610c979082611027565b5080610ca2816123a1565b915050610b62565b73ffffffffffffffffffffffffffffffffffffffff8316610cca57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d17576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190612322565b905081811015610de657610de684847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61132c565b50505050565b81600003610e26576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015610e6a57813414610e65576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b3415610ea1576040517e3f45b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610eac84610819565b9050610eba8433308661150e565b8281610ec586610819565b610ecf9190612233565b14610de6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff811115610f2457610f24611ccc565b604051908082528060200260200182016040528015610f4d578160200160208202803683370190505b50905060005b8281101561101e576000868683818110610f6f57610f6f612064565b9050602002810190610f819190612093565b610f92906080810190606001611c98565b90506000610f9f82610819565b905073ffffffffffffffffffffffffffffffffffffffff8216610fe957610fc63482612233565b848481518110610fd857610fd8612064565b602002602001018181525050611009565b80848481518110610ffc57610ffc612064565b6020026020010181815250505b50508080611016906123a1565b915050610f53565b50949350505050565b61103d6110376020830183611c98565b3b151590565b611073576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036110b3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806110c66060850160408601611c98565b905060006110da6080860160608701611c98565b905060006110e783610819565b905060006110f483610819565b90506000868310611106576000611110565b6111108388612233565b905073ffffffffffffffffffffffffffffffffffffffff85161561115f576111488561114260408b0160208c01611c98565b89610caa565b801561115a5761115a8533308461150e565b611163565b8695505b60008061117360208b018b611c98565b73ffffffffffffffffffffffffffffffffffffffff168861119760a08d018d611ff8565b6040516111a59291906123d9565b60006040518083038185875af1925050503d80600081146111e2576040519150601f19603f3d011682016040523d82523d6000602084013e6111e7565b606091505b5091509150816112325760006111fc826115b4565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105089190612415565b600061123d87610819565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c61126e60208e018e611c98565b8d60400160208101906112819190611c98565b8a8e8a8711611290578661129a565b61129a8b88612233565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83161561132257610e6583838361162b565b610e658282611683565b8015806113cc57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156113a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ca9190612322565b155b611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610508565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e659084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261176a565b73ffffffffffffffffffffffffffffffffffffffff841661155b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115a8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610de684848484611876565b60606044825110156115f957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611615600480855161160d9190612233565b8591906118d4565b9050808060200190518101906106109190612448565b73ffffffffffffffffffffffffffffffffffffffff8316611678576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e65838383611a2f565b73ffffffffffffffffffffffffffffffffffffffff82166116d0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461172a576040519150601f19603f3d011682016040523d82523d6000602084013e61172f565b606091505b5050905080610e65576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117cc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611a859092919063ffffffff16565b805190915015610e6557808060200190518101906117ea91906124bf565b610e65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610508565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610de69085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016114aa565b6060816118e281601f6124e1565b101561194a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610508565b61195482846124e1565b845110156119be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610508565b6060821580156119dd576040519150600082526020820160405261101e565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611a165780518352602092830192016119fe565b5050858452601f01601f19166040525050949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e659084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016114aa565b6060611a948484600085611a9c565b949350505050565b606082471015611b2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610508565b843b611b96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610508565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611bbf91906124f9565b60006040518083038185875af1925050503d8060008114611bfc576040519150601f19603f3d011682016040523d82523d6000602084013e611c01565b606091505b5091509150611c11828286611c1c565b979650505050505050565b60608315611c2b575081610610565b825115611c3b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105089190612415565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c9357600080fd5b919050565b600060208284031215611caa57600080fd5b61061082611c6f565b60006101008284031215611cc657600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610100810167ffffffffffffffff81118282101715611d1f57611d1f611ccc565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611d4e57611d4e611ccc565b604052919050565b600060808284031215611d6857600080fd5b6040516080810181811067ffffffffffffffff82111715611d8b57611d8b611ccc565b604052905080611d9a83611c6f565b815260208301356020820152611db260408401611c6f565b6040820152606083013560608201525092915050565b60008060008060c08587031215611dde57600080fd5b843567ffffffffffffffff80821115611df657600080fd5b611e0288838901611cb3565b95506020870135915080821115611e1857600080fd5b818701915087601f830112611e2c57600080fd5b813581811115611e3b57600080fd5b8860208260051b8501011115611e5057600080fd5b602083019550809450505050611e698660408701611d56565b905092959194509250565b60008082840360a0811215611e8857600080fd5b833567ffffffffffffffff811115611e9f57600080fd5b611eab86828701611cb3565b9350506080601f1982011215611ec057600080fd5b506020830190509250929050565b600067ffffffffffffffff821115611ee857611ee8611ccc565b50601f01601f191660200190565b600082601f830112611f0757600080fd5b8135611f1a611f1582611ece565b611d25565b818152846020838601011115611f2f57600080fd5b816020850160208301376000918101602001919091529392505050565b60006101008236031215611f5f57600080fd5b611f67611cfb565b82358152602083013567ffffffffffffffff811115611f8557600080fd5b611f9136828601611ef6565b602083015250611fa360408401611c6f565b6040820152611fb460608401611c6f565b6060820152611fc560808401611c6f565b6080820152611fd660a08401611c6f565b60a082015260c083013560c082015260e083013560e082015280915050919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261202d57600080fd5b83018035915067ffffffffffffffff82111561204857600080fd5b60200191503681900382131561205d57600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126120c757600080fd5b9190910192915050565b6000610160808352600681840152507f68797068656e00000000000000000000000000000000000000000000000000006101808301526101a0806020840152600081840152506101c08060408401528b81840152506101e08b8d8285013760008c840182015273ffffffffffffffffffffffffffffffffffffffff8b166060840152601f19601f8d0116830101905073ffffffffffffffffffffffffffffffffffffffff8916608083015273ffffffffffffffffffffffffffffffffffffffff881660a083015273ffffffffffffffffffffffffffffffffffffffff871660c08301528560e0830152846101008301526121d061012083018515159052565b8215156101408301529b9a5050505050505050505050565b6000608082840312156121fa57600080fd5b6106108383611d56565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561224557612245612204565b500390565b848152600073ffffffffffffffffffffffffffffffffffffffff808616602084015280851660408401525082606083015260a060808301526122b960a08301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152816020820152606060408201526000611a9460608301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b60006020828403121561233457600080fd5b5051919050565b6000808585111561234b57600080fd5b8386111561235857600080fd5b5050820193919092039150565b803560208310156108cc577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036123d2576123d2612204565b5060010190565b8183823760009101908152919050565b60005b838110156124045781810151838201526020016123ec565b83811115610de65750506000910152565b60208152600082518060208401526124348160408501602087016123e9565b601f01601f19169190910160400192915050565b60006020828403121561245a57600080fd5b815167ffffffffffffffff81111561247157600080fd5b8201601f8101841361248257600080fd5b8051612490611f1582611ece565b8181528560208385010111156124a557600080fd5b6124b68260208301602086016123e9565b95945050505050565b6000602082840312156124d157600080fd5b8151801515811461061057600080fd5b600082198211156124f4576124f4612204565b500190565b600082516120c78184602087016123e956fea264697066735822122043b2f2bd2b6219c088c46295daa42d5f659486424c235e47fb2917b9f8fb8e9164736f6c634300080d0033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): HyphenFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HyphenFacet;
}
export {};
