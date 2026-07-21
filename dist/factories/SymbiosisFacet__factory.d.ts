import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SymbiosisFacet, SymbiosisFacetInterface } from "../SymbiosisFacet";
type SymbiosisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SymbiosisFacet__factory extends ContractFactory {
    constructor(...args: SymbiosisFacetConstructorParams);
    deploy(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, _onchainSwapV3: PromiseOrValue<string>, _onchainSwapV3Gateway: PromiseOrValue<string>, _backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SymbiosisFacet>;
    getDeployTransaction(_symbiosisMetaRouter: PromiseOrValue<string>, _symbiosisGateway: PromiseOrValue<string>, _onchainSwapV3: PromiseOrValue<string>, _onchainSwapV3Gateway: PromiseOrValue<string>, _backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SymbiosisFacet;
    connect(signer: Signer): SymbiosisFacet__factory;
    static readonly bytecode = "0x610120604052348015610010575f5ffd5b50604051612dae380380612dae83398101604081905261002f916100ea565b6001600160a01b038516158061004c57506001600160a01b038416155b8061005e57506001600160a01b038116155b1561007c576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b038381161590831615146100aa576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0394851660805292841660a05290831660c052821660e052166101005261015b565b6001600160a01b03811681146100e7575f5ffd5b50565b5f5f5f5f5f60a086880312156100fe575f5ffd5b8551610109816100d3565b602087015190955061011a816100d3565b604087015190945061012b816100d3565b606087015190935061013c816100d3565b608087015190925061014d816100d3565b809150509295509295909350565b60805160a05160c05160e05161010051612c086101a65f395f611ea401525f61103e01525f8181610d1701528181610f5401526110b801525f6112f901525f6113240152612c085ff3fe608060405260043610610028575f3560e01c8063c46059b21461002c578063e23b7a0814610041575b5f5ffd5b61003f61003a366004612474565b610054565b005b61003f61004f36600461253a565b6103ca565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556100e0602083018361259f565b5f6100eb34476125ec565b90508680610100015161012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610168576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861018b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361023c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61024a602089018961259f565b73ffffffffffffffffffffffffffffffffffffffff1603610297576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8715801590610314575060808a015173ffffffffffffffffffffffffffffffffffffffff1689896102c96001826125ec565b8181106102d8576102d86125ff565b90506020028101906102ea919061262c565b6102fb90608081019060600161259f565b73ffffffffffffffffffffffffffffffffffffffff1614155b1561034b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b895160c08b015161038d91908b8b61036660208d018d61259f565b6103786101408e016101208f01612668565b610382575f610651565b8c6101a00135610651565b60c08b015261039c8a886107eb565b5047915050818111156103bd576103bd5f846103b885856125ec565b61081a565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610445576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610456602083018361259f565b5f61046134476125ec565b9050846104868160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104bd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104fa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610537576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610575576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105b3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105c1602089018961259f565b73ffffffffffffffffffffffffffffffffffffffff160361060e576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61062088608001518960c0015161084f565b61062a88886107eb565b504791505081811115610646576106465f846103b885856125ec565b50505f909155505050565b5f8380820361068c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661069a6001856125ec565b8181106106a9576106a96125ff565b90506020028101906106bb919061262c565b6106cc90608081019060600161259f565b90505f6106d8826108ff565b905073ffffffffffffffffffffffffffffffffffffffff8216610702576106ff34826125ec565b90505b5f61070d8989610949565b90506107198989610a53565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610754818b8b85610abf565b5f8361075f866108ff565b61076991906125ec565b905073ffffffffffffffffffffffffffffffffffffffff85166107935761079088826125ec565b90505b8b8110156107db576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b6107fd61014082016101208301612668565b156108105761080c8282610d15565b5050565b61080c8282611205565b73ffffffffffffffffffffffffffffffffffffffff83166108445761083f82826115b8565b505050565b61083f838383611625565b805f03610888576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108dd578034101561080c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61080c73ffffffffffffffffffffffffffffffffffffffff8316333084611693565b5f73ffffffffffffffffffffffffffffffffffffffff8216156109415761093c73ffffffffffffffffffffffffffffffffffffffff8316306116eb565b610943565b475b92915050565b6060815f8167ffffffffffffffff8111156109665761096661223e565b60405190808252806020026020018201604052801561098f578160200160208202803683370190505b5090505f5f5b83811015610a48578686828181106109af576109af6125ff565b90506020028101906109c1919061262c565b6109d290608081019060600161259f565b91506109dd826108ff565b8382815181106109ef576109ef6125ff565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a405734838281518110610a2857610a286125ff565b60200260200101818151610a3c91906125ec565b9052505b600101610995565b509095945050505050565b5f5b8181101561083f5736838383818110610a7057610a706125ff565b9050602002810190610a82919061262c565b9050610a9460e0820160c08301612668565b15610ab657610ab6610aac606083016040840161259f565b826080013561084f565b50600101610a55565b60208401516040850151849184918490835f80805b83811015610cf957368c8c83818110610aef57610aef6125ff565b9050602002810190610b01919061262c565b9050610b10602082018261259f565b9350610b22604082016020830161259f565b9250610bc584610b3560a0840184612681565b610b43916004915f916126e9565b610b4c91612710565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610cad5750610bf9610bdf606083016040840161259f565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610c3257508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610cad575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610ce4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d51610cf0908261171e565b50600101610ad4565b50505050610d0a8585858585611991565b505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610d82576040517f78982fad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610de9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6512309ce540018260e0015114610e2c576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020810135610e67576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e718282611ba8565b81515f9081527f538927223924206bd240a355218da67e32e6e52053f03de093634bb0225f5b21602081905260409091205460ff1615610edd576040517feb4156ad00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82515f9081526020828152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580517fddca3f43000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263ddca3f4392600480820193918290030181865afa158015610f99573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fbd9190612776565b9050826101a001358114610ffd576040517f7681b00e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080840151819073ffffffffffffffffffffffffffffffffffffffff166110345760c085015161102d908261278d565b9050611067565b61106785608001517f00000000000000000000000000000000000000000000000000000000000000008760c00151611f62565b5f856101000151611078578161107a565b825b9050348111156110b6576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166321c69a198388608001518960c0015189610140016020810190611111919061259f565b6111236101808c016101608d0161259f565b6111316101808d018d612681565b6040518863ffffffff1660e01b8152600401611152969594939291906127a0565b5f604051808303818588803b158015611169575f5ffd5b505af115801561117b573d5f5f3e3d5ffd5b50505050508560e00151865f01517f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c87602001356040516111be91815260200190565b60405180910390a37fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1866040516111f59190612896565b60405180910390a1505050505050565b61121260c08201826129a9565b159050806112815750608082015173ffffffffffffffffffffffffffffffffffffffff1661124360c08301836129a9565b5f818110611253576112536125ff565b9050602002016020810190611268919061259f565b73ffffffffffffffffffffffffffffffffffffffff1614155b156112b8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112db836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f81156112ef575060c0830151611322565b61132284608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151611f62565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a11b11988260405180610120016040528087806040019061137b9190612681565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050908252506020016113c16060890189612681565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509082525060200161140760c08901896129a9565b808060200260200160405190810160405280939291908181526020018383602002808284375f9201919091525050509082525060200161144d60a0890160808a0161259f565b73ffffffffffffffffffffffffffffffffffffffff16815260200161147860c0890160a08a0161259f565b73ffffffffffffffffffffffffffffffffffffffff16815260c0890151602082015286151560408201526060016114b6610100890160e08a0161259f565b73ffffffffffffffffffffffffffffffffffffffff1681526020016114df610100890189612681565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815261154d9190600401612a5d565b5f604051808303818588803b158015611564575f5ffd5b505af1158015611576573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516115aa9190612896565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8216611605576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61080c73ffffffffffffffffffffffffffffffffffffffff831682611f8e565b73ffffffffffffffffffffffffffffffffffffffff8216611672576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61083f73ffffffffffffffffffffffffffffffffffffffff84168383611fa7565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166116de57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61173661172e602083018361259f565b6017903b1190565b61176c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036117ab576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6117bf610bdf606085016040860161259f565b6117c9575f6117cf565b82608001355b90505f6117ea6117e5608086016060870161259f565b6108ff565b9050815f0361182057611820611806606086016040870161259f565b611816604087016020880161259f565b8660800135611f62565b5f8061182f602087018761259f565b73ffffffffffffffffffffffffffffffffffffffff168461185360a0890189612681565b604051611861929190612bc3565b5f6040518083038185875af1925050503d805f811461189b576040519150601f19603f3d011682016040523d82523d5f602084013e6118a0565b606091505b5091509150816118b3576118b381611ff0565b5f6118c76117e56080890160608a0161259f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886118f860208a018a61259f565b61190860608b0160408c0161259f565b61191860808c0160608d0161259f565b8b6080013589871161192a5786611934565b6119348a886125ec565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826119a06001826125ec565b8181106119af576119af6125ff565b90506020028101906119c1919061262c565b6119d290608081019060600161259f565b90505f5f5f5f5f5f5f5b88811015611b98576119ef60018a6125ec565b811080156119fe575088600114155b15611ad9578d8d82818110611a1557611a156125ff565b9050602002810190611a27919061262c565b611a3890608081019060600161259f565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611ad9578a8181518110611a7f57611a7f6125ff565b6020026020010151611a90876108ff565b611a9a91906125ec565b965073ffffffffffffffffffffffffffffffffffffffff861615611abe575f611ac0565b895b935083871115611ad957611ad9868d6103b8878b6125ec565b8d8d82818110611aeb57611aeb6125ff565b9050602002810190611afd919061262c565b611b0e90606081019060400161259f565b9450611b19856108ff565b925073ffffffffffffffffffffffffffffffffffffffff851615611b3d575f611b3f565b895b91508183118015611b7c57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b9057611b90858d6103b885876125ec565b6001016119dc565b5050505050505050505050505050565b806101c00135421115611be7576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815160c0830151608084015160e08501515f937f24a0b336eff6ad63feed247a28c8cdf8008918cb43f9401ea16b8889ce6e8e6693909290916020870135611c3761016089016101408a0161259f565b611c496101808a016101608b0161259f565b611c576101808b018b612681565b604051611c65929190612bc3565b6040519081900390206101a08b01356101c08c0135611c8760208e018e61259f565b60408051602081019d909d528c019a909a5260608b019890985273ffffffffffffffffffffffffffffffffffffffff96871660808b015260a08a019590955260c089019390935290841660e08801528316610100870152610120860152610140850152610160840191909152166101808201526101a0016040516020818303038152906040528051906020012090505f611e1a604080518082018252601581527f4c492e46492053796d62696f736973204661636574000000000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f6693c323254b90b9e5daf6fac05df1190d2903b2507eb6350c5ff1e0d1c75bfb818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016611f0f82611ed66101e0870187612681565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250611ffa92505050565b73ffffffffffffffffffffffffffffffffffffffff1614611f5c576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b61083f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61209e565b5f385f3884865af161080c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611fe7576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b604051600190835f526020830151604052604083510361204e57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052612072565b604183510361206e5760608301515f1a6020526040830151606052612072565b5f91505b6020600160805f855afa5191503d61209157638baa579f5f526004601cfd5b5f60605260405292915050565b73ffffffffffffffffffffffffffffffffffffffff841615611f5c5773ffffffffffffffffffffffffffffffffffffffff8316612107576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561217a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061219e9190612776565b1015611f5c57611f5c73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611fe7575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611fe757633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561228f5761228f61223e565b60405290565b5f82601f8301126122a4575f5ffd5b813567ffffffffffffffff8111156122be576122be61223e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561230b5761230b61223e565b604052818152838201602001851015612322575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114612361575f5ffd5b919050565b80358015158114612361575f5ffd5b5f6101408284031215612386575f5ffd5b61238e61226b565b823581529050602082013567ffffffffffffffff8111156123ad575f5ffd5b6123b984828501612295565b602083015250604082013567ffffffffffffffff8111156123d8575f5ffd5b6123e484828501612295565b6040830152506123f66060830161233e565b60608201526124076080830161233e565b608082015261241860a0830161233e565b60a082015260c0828101359082015260e0808301359082015261243e6101008301612366565b6101008201526124516101208301612366565b61012082015292915050565b5f610200828403121561246e575f5ffd5b50919050565b5f5f5f5f60608587031215612487575f5ffd5b843567ffffffffffffffff81111561249d575f5ffd5b6124a987828801612375565b945050602085013567ffffffffffffffff8111156124c5575f5ffd5b8501601f810187136124d5575f5ffd5b803567ffffffffffffffff8111156124eb575f5ffd5b8760208260051b84010111156124ff575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115612522575f5ffd5b61252e8782880161245d565b91505092959194509250565b5f5f6040838503121561254b575f5ffd5b823567ffffffffffffffff811115612561575f5ffd5b61256d85828601612375565b925050602083013567ffffffffffffffff811115612589575f5ffd5b6125958582860161245d565b9150509250929050565b5f602082840312156125af575f5ffd5b6125b88261233e565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610943576109436125bf565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261265e575f5ffd5b9190910192915050565b5f60208284031215612678575f5ffd5b6125b882612366565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126b4575f5ffd5b83018035915067ffffffffffffffff8211156126ce575f5ffd5b6020019150368190038213156126e2575f5ffd5b9250929050565b5f5f858511156126f7575f5ffd5b83861115612703575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561276f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612786575f5ffd5b5051919050565b80820180821115610943576109436125bf565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015273ffffffffffffffffffffffffffffffffffffffff8516604082015273ffffffffffffffffffffffffffffffffffffffff8416606082015260a060808201528160a0820152818360c08301375f81830160c090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010195945050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526128bd61016084018261284a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526128f8828261284a565b9150506060840151612922608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161299161012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126129dc575f5ffd5b83018035915067ffffffffffffffff8211156129f6575f5ffd5b6020019150600581901b36038213156126e2575f5ffd5b5f8151808452602084019350602083015f5b82811015612a5357815173ffffffffffffffffffffffffffffffffffffffff16865260209586019590910190600101612a1f565b5093949350505050565b602081525f82516101206020840152612a7a61014084018261284a565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016040850152612ab5828261284a565b91505060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152612af18282612a0d565b9150506060840151612b1b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015160c084015260c0840151612b5b60e085018215159052565b5060e084015173ffffffffffffffffffffffffffffffffffffffff8116610100850152506101008401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610120850152612bba828261284a565b95945050505050565b818382375f910190815291905056fea264697066735822122025323bbbde35e4cd559d65fc1d5b97648d88b1647f5057b8d9991dc78a14f0e164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbiosisMetaRouter";
            readonly type: "address";
            readonly internalType: "contract ISymbiosisMetaRouter";
        }, {
            readonly name: "_symbiosisGateway";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_onchainSwapV3";
            readonly type: "address";
            readonly internalType: "contract IOnchainSwapV3";
        }, {
            readonly name: "_onchainSwapV3Gateway";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEvmReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "viaOnchainSwapV3";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "dex";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dexgateway";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "onchainSwapData";
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
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaSymbiosis";
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
            readonly name: "_symbiosisData";
            readonly type: "tuple";
            readonly internalType: "struct SymbiosisFacet.SymbiosisData";
            readonly components: readonly [{
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEvmReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "firstSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "secondSwapCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "firstDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "secondDexRouter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approvedTokens";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "viaOnchainSwapV3";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "dex";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dexgateway";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "onchainSwapData";
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
                readonly name: "signature";
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
        readonly name: "InvalidDestinationChain";
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
        readonly name: "InvalidSignature";
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
        readonly name: "OnchainSwapV3FeeMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnchainSwapV3NotSupported";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SignatureExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TransactionAlreadyProcessed";
        readonly inputs: readonly [];
    }];
    static createInterface(): SymbiosisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SymbiosisFacet;
}
export {};
