import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EverclearFacet, EverclearFacetInterface } from "../EverclearFacet";
type EverclearFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EverclearFacet__factory extends ContractFactory {
    constructor(...args: EverclearFacetConstructorParams);
    deploy(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EverclearFacet>;
    getDeployTransaction(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EverclearFacet;
    connect(signer: Signer): EverclearFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516127f13803806127f183398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516127326100bf5f395f81816053015281816108ef01528181610a380152610c8501526127325ff3fe60806040526004361061003e575f3560e01c8063661d9c2014610042578063d4c2bdde1461009f578063e27c35bf146100b4578063f97136af146100c7575b5f5ffd5b34801561004d575f5ffd5b506100757f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100b26100ad366004611d1d565b6100f0565b005b6100b26100c2366004611de3565b6104d0565b3480156100d2575f5ffd5b506100e2670de0b6b3a764000081565b604051908152602001610096565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161016b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61017b3447611e75565b9050868061010001516101ba576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101f8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861021b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610252576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361028f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102cc576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896102ef816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610326576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033a8b5f01518c60c001518c8c33610753565b60c08c01526040805161014081018252893581526020808b01359082015289820135918101919091525f9060608101670de0b6b3a764000061038260a08d0160808e01611ea7565b6fffffffffffffffffffffffffffffffff168f60c001516103a39190611ec7565b6103ad9190611ede565b81526020016103c260a08c0160808d01611ea7565b6fffffffffffffffffffffffffffffffff1681526020016103e960c08c0160a08d01611f37565b65ffffffffffff16815260200161040360c08c018c611f52565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509082525060e08b013560208201526101008b0135604082015260600161045f6101208c018c611f52565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250505091525090506104a08c82610895565b50479350505050818111156104c3576104c35f846104be8585611e75565b610de6565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161054b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61055b3447611e75565b9050846105808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156105b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036105f4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610631576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561066f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156106ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876106d0816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610707576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071989608001518a60c00151610e1b565b61072b896107268a611fba565b610895565b50479250505081811115610748576107485f846104be8585611e75565b50505f909155505050565b5f8280820361078e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561079c600185611e75565b8181106107ab576107ab61208a565b90506020028101906107bd91906120b7565b6107ce9060808101906060016120f3565b90505f6107da82610ecf565b905073ffffffffffffffffffffffffffffffffffffffff8216610804576108013482611e75565b90505b5f61080f8888610f19565b905061081b8888611023565b6108288a8989898561108f565b5f8261083385610ecf565b61083d9190611e75565b905089811015610887576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b604081015115806108ae57508060e001518260c0015111155b156108e5576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61091882608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611251565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610b9b57805161099b576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f9160208083019080368337019050509050660416edef1601be8360e0015103610a045763536f6c4d815f815181106109e5576109e561208a565b602002602001019063ffffffff16908163ffffffff1681525050610a36565b6040517f3ea0d59500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ae9b2bad836020015183855f0151876080015187604001518860e001518a60c00151610a9a9190611e75565b89606001518a60a001518b60c0015160405180606001604052808e60e0015181526020018e610100015181526020018e61012001518152506040518b63ffffffff1660e01b8152600401610af6999897969594939291906121c8565b5f6040518083038185885af1158015610b11573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b57919081019061235e565b505060e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a350610dab565b805160a083015173ffffffffffffffffffffffffffffffffffffffff1614610bef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f916020808301908036833750505060e084015190915063ffffffff1015610c52576040517f3ea0d59500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8260e00151815f81518110610c6957610c6961208a565b602002602001019063ffffffff16908163ffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ceb6341c8360200151838660a00151876080015187604001515f1c8860e001518a60c00151610cea9190611e75565b89606001518a60a001518b60c0015160405180606001604052808e60e0015181526020018e610100015181526020018e61012001518152506040518b63ffffffff1660e01b8152600401610d4699989796959493929190612489565b5f6040518083038185885af1158015610d61573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610da7919081019061235e565b5050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610dda919061251d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610e1057610e0b828261127d565b505050565b610e0b8383836112ea565b805f03610e54576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ead5780341015610ea9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ea973ffffffffffffffffffffffffffffffffffffffff8316333084611358565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f1157610f0c73ffffffffffffffffffffffffffffffffffffffff8316306113b0565b610f13565b475b92915050565b6060815f8167ffffffffffffffff811115610f3657610f36611a84565b604051908082528060200260200182016040528015610f5f578160200160208202803683370190505b5090505f5f5b8381101561101857868682818110610f7f57610f7f61208a565b9050602002810190610f9191906120b7565b610fa29060808101906060016120f3565b9150610fad82610ecf565b838281518110610fbf57610fbf61208a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110105734838281518110610ff857610ff861208a565b6020026020010181815161100c9190611e75565b9052505b600101610f65565b509095945050505050565b5f5b81811015610e0b57368383838181106110405761104061208a565b905060200281019061105291906120b7565b905061106460e0820160c08301612630565b156110865761108661107c60608301604084016120f3565b8260800135610e1b565b50600101611025565b83838383825f5b8181101561123757368a8a838181106110b1576110b161208a565b90506020028101906110c391906120b7565b90506110f26110d860608301604084016120f3565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611154575061115461110b60408301602084016120f3565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561116b575061116b61110b60208301836120f3565b80156111ee57506111ee61118260a0830183611f52565b611190916004915f91612649565b61119991612670565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611224576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61122e8c826113e3565b50600101611096565b5050611246848484845f611656565b505050505050505050565b610e0b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61186d565b73ffffffffffffffffffffffffffffffffffffffff82166112ca576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ea973ffffffffffffffffffffffffffffffffffffffff83168261199a565b73ffffffffffffffffffffffffffffffffffffffff8216611337576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0b73ffffffffffffffffffffffffffffffffffffffff841683836119b3565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166113a357637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113fb6113f360208301836120f3565b6017903b1190565b611431576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611470576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114846110d860608501604086016120f3565b61148e575f611494565b82608001355b90505f6114af6114aa60808601606087016120f3565b610ecf565b9050815f036114e5576114e56114cb60608601604087016120f3565b6114db60408701602088016120f3565b8660800135611251565b5f806114f460208701876120f3565b73ffffffffffffffffffffffffffffffffffffffff168461151860a0890189611f52565b6040516115269291906126d6565b5f6040518083038185875af1925050503d805f8114611560576040519150601f19603f3d011682016040523d82523d5f602084013e611565565b606091505b50915091508161157857611578816119fc565b5f61158c6114aa6080890160608a016120f3565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886115bd60208a018a6120f3565b6115cd60608b0160408c016120f3565b6115dd60808c0160608d016120f3565b8b608001358987116115ef57866115f9565b6115f98a88611e75565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611665600182611e75565b8181106116745761167461208a565b905060200281019061168691906120b7565b6116979060808101906060016120f3565b90505f5f5f5f5f5f5f5b8881101561185d576116b460018a611e75565b811080156116c3575088600114155b1561179e578d8d828181106116da576116da61208a565b90506020028101906116ec91906120b7565b6116fd9060808101906060016120f3565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461179e578a81815181106117445761174461208a565b602002602001015161175587610ecf565b61175f9190611e75565b965073ffffffffffffffffffffffffffffffffffffffff861615611783575f611785565b895b93508387111561179e5761179e868d6104be878b611e75565b8d8d828181106117b0576117b061208a565b90506020028101906117c291906120b7565b6117d39060608101906040016120f3565b94506117de85610ecf565b925073ffffffffffffffffffffffffffffffffffffffff851615611802575f611804565b895b9150818311801561184157508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561185557611855858d6104be8587611e75565b6001016116a1565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156119945773ffffffffffffffffffffffffffffffffffffffff83166118d6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611949573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061196d91906126e5565b10156119945761199473ffffffffffffffffffffffffffffffffffffffff85168483611a06565b50505050565b5f385f3884865af1610ea95763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166119f3576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166119f3575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166119f357633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ad557611ad5611a84565b60405290565b604051610180810167ffffffffffffffff81118282101715611ad557611ad5611a84565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611b4657611b46611a84565b604052919050565b5f67ffffffffffffffff821115611b6757611b67611a84565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611ba2575f5ffd5b8135602083015f611bba611bb584611b4e565b611aff565b9050828152858383011115611bcd575f5ffd5b828260208301375f92810160200192909252509392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c0a575f5ffd5b919050565b80358015158114611c0a575f5ffd5b5f6101408284031215611c2f575f5ffd5b611c37611ab1565b823581529050602082013567ffffffffffffffff811115611c56575f5ffd5b611c6284828501611b93565b602083015250604082013567ffffffffffffffff811115611c81575f5ffd5b611c8d84828501611b93565b604083015250611c9f60608301611be7565b6060820152611cb060808301611be7565b6080820152611cc160a08301611be7565b60a082015260c0828101359082015260e08083013590820152611ce76101008301611c0f565b610100820152611cfa6101208301611c0f565b61012082015292915050565b5f6101408284031215611d17575f5ffd5b50919050565b5f5f5f5f60608587031215611d30575f5ffd5b843567ffffffffffffffff811115611d46575f5ffd5b611d5287828801611c1e565b945050602085013567ffffffffffffffff811115611d6e575f5ffd5b8501601f81018713611d7e575f5ffd5b803567ffffffffffffffff811115611d94575f5ffd5b8760208260051b8401011115611da8575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611dcb575f5ffd5b611dd787828801611d06565b91505092959194509250565b5f5f60408385031215611df4575f5ffd5b823567ffffffffffffffff811115611e0a575f5ffd5b611e1685828601611c1e565b925050602083013567ffffffffffffffff811115611e32575f5ffd5b611e3e85828601611d06565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610f1357610f13611e48565b80356fffffffffffffffffffffffffffffffff81168114611c0a575f5ffd5b5f60208284031215611eb7575f5ffd5b611ec082611e88565b9392505050565b8082028115828204841417610f1357610f13611e48565b5f82611f11577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b65ffffffffffff81168114611f29575f5ffd5b50565b8035611c0a81611f16565b5f60208284031215611f47575f5ffd5b8135611ec081611f16565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f85575f5ffd5b83018035915067ffffffffffffffff821115611f9f575f5ffd5b602001915036819003821315611fb3575f5ffd5b9250929050565b5f6101408236031215611fcb575f5ffd5b611fd3611ab1565b8235815260208084013590820152604080840135908201526060808401359082015261200160808401611e88565b608082015261201260a08401611f2c565b60a082015260c083013567ffffffffffffffff811115612030575f5ffd5b61203c36828601611b93565b60c08301525060e08381013590820152610100808401359082015261012083013567ffffffffffffffff811115612071575f5ffd5b61207d36828601611b93565b6101208301525092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120e9575f5ffd5b9190910192915050565b5f60208284031215612103575f5ffd5b611ec082611be7565b5f8151808452602084019350602083015f5b8281101561214257815163ffffffff1686526020958601959091019060010161211e565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301525f6040820151606060408501526121c0606085018261214c565b949350505050565b61012081525f6121dc61012083018c61210c565b8a602084015273ffffffffffffffffffffffffffffffffffffffff8a1660408401528860608401528760808401528660a084015265ffffffffffff861660c084015282810360e0840152612230818661214c565b90508281036101008401526122458185612198565b9c9b505050505050505050505050565b805163ffffffff81168114611c0a575f5ffd5b805167ffffffffffffffff81168114611c0a575f5ffd5b8051611c0a81611f16565b5f82601f830112612299575f5ffd5b815167ffffffffffffffff8111156122b3576122b3611a84565b8060051b6122c360208201611aff565b918252602081850181019290810190868411156122de575f5ffd5b6020860192505b83831015612307576122f683612255565b8252602092830192909101906122e5565b9695505050505050565b5f82601f830112612320575f5ffd5b815161232e611bb582611b4e565b818152846020838601011115612342575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f6040838503121561236f575f5ffd5b8251602084015190925067ffffffffffffffff81111561238d575f5ffd5b8301610180818603121561239f575f5ffd5b6123a7611adb565b815181526020808301519082015260408083015190820152606080830151908201526123d560808301612255565b60808201526123e660a08301612268565b60a08201526123f760c0830161227f565b60c082015261240860e0830161227f565b60e08201526101008281015190820152610120808301519082015261014082015167ffffffffffffffff81111561243d575f5ffd5b6124498782850161228a565b6101408301525061016082015167ffffffffffffffff81111561246a575f5ffd5b61247687828501612311565b6101608301525080925050509250929050565b61012081525f61249d61012083018c61210c565b73ffffffffffffffffffffffffffffffffffffffff8b16602084015273ffffffffffffffffffffffffffffffffffffffff8a16604084015273ffffffffffffffffffffffffffffffffffffffff891660608401528760808401528660a084015265ffffffffffff861660c084015282810360e0840152612230818661214c565b60208152815160208201525f6020830151610140604084015261254461016084018261214c565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261257f828261214c565b91505060608401516125a9608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161261861012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612640575f5ffd5b611ec082611c0f565b5f5f85851115612657575f5ffd5b83861115612663575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156126cf577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156126f5575f5ffd5b505191905056fea26469706673582212201374230f78c7d8b65b771a5e19f65ad3cf233aea9a879765652018b680043f2564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_feeAdapter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "FEE_ADAPTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEverclearFeeAdapter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MULTIPLIER_BASE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMinMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMinMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsupportedEverclearChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): EverclearFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EverclearFacet;
}
export {};
