import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GasZipFacet, GasZipFacetInterface } from "../../GasZipFacet.sol/GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200280538038062002805833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612764620000a16000396000818160b90152818161017e015261023101526127646000f3fe60806040526004361061005a5760003560e01c8063a8885f6211610043578063a8885f6214610094578063ba956b9a146100a7578063ded5b2c31461010457600080fd5b80633d86ea871461005f578063867372e414610081575b600080fd5b34801561006b57600080fd5b5061007f61007a366004611fb6565b610117565b005b61007f61008f366004612012565b6101e5565b61007f6100a236600461225b565b610294565b3480156100b357600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61007f6101123660046122bf565b610541565b476101236000856107f3565b600061012f824761237e565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff85811660248301529192507f000000000000000000000000000000000000000000000000000000000000000090911690636e553f659083906044016000604051808303818588803b1580156101c557600080fd5b505af11580156101d9573d6000803e3d6000fd5b50505050505050505050565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b15801561027657600080fd5b505af115801561028a573d6000803e3d6000fd5b5050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610320344761237e565b9050846103458160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561037c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610435576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610473576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015173ffffffffffffffffffffffffffffffffffffffff16156104c5576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104dc8860c0015188600001358a60a001516101e5565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18860405161050b9190612426565b60405180910390a150479150508181111561053557610535600084610530858561237e565b610af0565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105bc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105cd344761237e565b90508680610100015161060c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561064a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861066d8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106a4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036106e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361071f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107348a600001518b60c001518b8b33610b26565b60c08b015260808a015173ffffffffffffffffffffffffffffffffffffffff166107745761076f8a60c0015188600001358c60a001516101e5565b610791565b6107916107846020890189612539565b60a08c0151893590610117565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18a6040516107c09190612426565b60405180910390a15047915050818111156107e5576107e5600084610530858561237e565b505060009091555050505050565b6108096108036020830183612577565b3b151590565b61083f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361087f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006108ae6108946060850160408601612577565b73ffffffffffffffffffffffffffffffffffffffff161590565b6108b95760006108bf565b82608001355b905060006108db6108d66060860160408701612577565b610c69565b905060006108f26108d66080870160608801612577565b9050826000036109295761092961090f6060870160408801612577565b61091f6040880160208901612577565b8760800135610d22565b8460800135821015610979576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044015b60405180910390fd5b6000806109896020880188612577565b73ffffffffffffffffffffffffffffffffffffffff16856109ad60a08a018a612599565b6040516109bb929190612605565b60006040518083038185875af1925050503d80600081146109f8576040519150601f19603f3d011682016040523d82523d6000602084013e6109fd565b606091505b509150915081610a1057610a1081610e65565b6000610a256108d660808a0160608b01612577565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610a5660208b018b612577565b610a6660608c0160408d01612577565b610a7660808d0160608e01612577565b8c60800135898711610a885786610a92565b610a928a8861237e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610b1c57610b17838383610e6f565b505050565b610b178282610ff1565b600082808203610b62576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610b7160018561237e565b818110610b8057610b80612615565b9050602002810190610b929190612539565b610ba3906080810190606001612577565b90506000610bb082610c69565b905073ffffffffffffffffffffffffffffffffffffffff8216610bda57610bd7348261237e565b90505b6000610be6888861111b565b9050610bf28888611227565b610bff8a89898985611294565b600082610c0b85610c69565b610c15919061237e565b905089811015610c5b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610970565b9a9950505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610d1a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610cf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d159190612644565b610d1c565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610d4257505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d8f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610e04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e289190612644565b1015610b1757610e3a8383600061162b565b610b1783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61162b565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8316610ebc576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f09576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610f76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9a9190612644565b905080821115610fe0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610970565b610feb84848461182b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661103e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611081576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610970565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110db576040519150601f19603f3d011682016040523d82523d6000602084013e6110e0565b606091505b5050905080610b17576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608160008167ffffffffffffffff8111156111395761113961203e565b604051908082528060200260200182016040528015611162578160200160208202803683370190505b5090506000805b8381101561121c5786868281811061118357611183612615565b90506020028101906111959190612539565b6111a6906080810190606001612577565b91506111b182610c69565b8382815181106111c3576111c3612615565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661121457348382815181106111fc576111fc612615565b60200260200101818151611210919061237e565b9052505b600101611169565b509095945050505050565b60005b81811015610b17573683838381811061124557611245612615565b90506020028101906112579190612539565b905061126960e0820160c0830161265d565b1561128b5761128b6112816060830160408401612577565b8260800135611881565b5060010161122a565b83838383826001811461154757600085856112b060018561237e565b8181106112bf576112bf612615565b90506020028101906112d19190612539565b6112e2906080810190606001612577565b9050600089815b8181101561147357368d8d8381811061130457611304612615565b90506020028101906113169190612539565b905061132b6108946060830160408401612577565b8061138e575061138e6113446040830160208401612577565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113a557506113a56113446020830183612577565b801561142a575061142a6113bc60a0830183612599565b6113cb9160049160009161267a565b6113d4916126a4565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611460576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61146a8f826107f3565b506001016112e9565b505060005b61148360018561237e565b81101561153f57600088888381811061149e5761149e612615565b90506020028101906114b09190612539565b6114c1906080810190606001612577565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115365785828151811061150857611508612615565b602002602001015161151982610c69565b611523919061237e565b9250821561153657611536818885610af0565b50600101611478565b5050506101d9565b8760005b8181101561161d57368b8b8381811061156657611566612615565b90506020028101906115789190612539565b905061158d6108946060830160408401612577565b806115a657506115a66113446040830160208401612577565b80156115bd57506115bd6113446020830183612577565b80156115d457506115d46113bc60a0830183612599565b61160a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116148d826107f3565b5060010161154b565b505050505050505050505050565b8015806116cb57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c99190612644565b155b611757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610970565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b179084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119f7565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b179084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016117a9565b806000036118bb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166119145780341015611910576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015611981573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119a59190612644565b9050818110156119eb576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610970565b610b1783333085611b06565b6000611a59826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d209092919063ffffffff16565b9050805160001480611a7a575080806020019051810190611a7a91906126ec565b610b17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610970565b73ffffffffffffffffffffffffffffffffffffffff8416611b53576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611ba0576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611c11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c359190612644565b9050611c4382868686611d37565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611cb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cd79190612644565b611ce1919061237e565b14611d18576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6060611d2f8484600085611d95565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610feb9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016117a9565b606082471015611e27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610970565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e509190612709565b60006040518083038185875af1925050503d8060008114611e8d576040519150601f19603f3d011682016040523d82523d6000602084013e611e92565b606091505b5091509150611ea387838387611eae565b979650505050505050565b60608315611f44578251600003611f3d5773ffffffffffffffffffffffffffffffffffffffff85163b611f3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610970565b5081611d2f565b611d2f8383815115611f595781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610970919061271b565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fb157600080fd5b919050565b600080600060608486031215611fcb57600080fd5b833567ffffffffffffffff811115611fe257600080fd5b840160e08187031215611ff457600080fd5b92506020840135915061200960408501611f8d565b90509250925092565b60008060006060848603121561202757600080fd5b833592506020840135915061200960408501611f8d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120915761209161203e565b60405290565b600082601f8301126120a857600080fd5b813567ffffffffffffffff808211156120c3576120c361203e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156121095761210961203e565b8160405283815286602085880101111561212257600080fd5b836020870160208301376000602085830101528094505050505092915050565b801515811461215057600080fd5b50565b8035611fb181612142565b6000610140828403121561217157600080fd5b61217961206d565b905081358152602082013567ffffffffffffffff8082111561219a57600080fd5b6121a685838601612097565b602084015260408401359150808211156121bf57600080fd5b506121cc84828501612097565b6040830152506121de60608301611f8d565b60608201526121ef60808301611f8d565b608082015261220060a08301611f8d565b60a082015260c082013560c082015260e082013560e0820152610100612227818401612153565b90820152610120612239838201612153565b9082015292915050565b60006040828403121561225557600080fd5b50919050565b6000806040838503121561226e57600080fd5b823567ffffffffffffffff8082111561228657600080fd5b6122928683870161215e565b935060208501359150808211156122a857600080fd5b506122b585828601612243565b9150509250929050565b600080600080606085870312156122d557600080fd5b843567ffffffffffffffff808211156122ed57600080fd5b6122f98883890161215e565b9550602087013591508082111561230f57600080fd5b818701915087601f83011261232357600080fd5b81358181111561233257600080fd5b8860208260051b850101111561234757600080fd5b60208301955080945050604087013591508082111561236557600080fd5b5061237287828801612243565b91505092959194509250565b81810381811115610d1c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60005b838110156123d35781810151838201526020016123bb565b50506000910152565b600081518084526123f48160208601602086016123b8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261244f6101608501836123dc565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261248a83826123dc565b92505060608501516124b4608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125278187018315159052565b90950151151593019290925250919050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261256d57600080fd5b9190910192915050565b60006020828403121561258957600080fd5b61259282611f8d565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125ce57600080fd5b83018035915067ffffffffffffffff8211156125e957600080fd5b6020019150368190038213156125fe57600080fd5b9250929050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561265657600080fd5b5051919050565b60006020828403121561266f57600080fd5b813561259281612142565b6000808585111561268a57600080fd5b8386111561269757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126e45780818660040360031b1b83161692505b505092915050565b6000602082840312156126fe57600080fd5b815161259281612142565b6000825161256d8184602087016123b8565b60208152600061259260208301846123dc56fea264697066735822122010ae6cd5441e8bfb83e2b563be9dc8368515473c61e3c7b83ff399fa0dd13abe64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositToGasZipERC20";
        readonly inputs: readonly [{
            readonly name: "_swapData";
            readonly type: "tuple";
            readonly internalType: "struct LibSwap.SwapData";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "depositToGasZipNative";
        readonly inputs: readonly [{
            readonly name: "_amountToZip";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct GasZipFacet.GasZipData";
            readonly components: readonly [{
                readonly name: "gasZipChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "gasZipSwapData";
                readonly type: "tuple";
                readonly internalType: "struct LibSwap.SwapData";
                readonly components: readonly [{
                    readonly name: "callTo";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "approveTo";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "sendingAssetId";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "receivingAssetId";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "fromAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "requiresDeposit";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct GasZipFacet.GasZipData";
            readonly components: readonly [{
                readonly name: "gasZipChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "gasZipSwapData";
                readonly type: "tuple";
                readonly internalType: "struct LibSwap.SwapData";
                readonly components: readonly [{
                    readonly name: "callTo";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "approveTo";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "sendingAssetId";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "receivingAssetId";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "fromAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "requiresDeposit";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
