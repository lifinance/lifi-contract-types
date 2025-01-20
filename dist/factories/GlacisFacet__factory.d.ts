import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GlacisFacet, GlacisFacetInterface } from "../GlacisFacet";
declare type GlacisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GlacisFacet__factory extends ContractFactory {
    constructor(...args: GlacisFacetConstructorParams);
    deploy(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GlacisFacet>;
    getDeployTransaction(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GlacisFacet;
    connect(signer: Signer): GlacisFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200262438038062002624833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612583620000a16000396000818160600152818161069e01526106c901526125836000f3fe6080604052600436106100345760003560e01c8063753cbab61461003957806382a3279b1461004e578063e10c04c1146100ab575b600080fd5b61004c6100473660046120a2565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b93660046120f1565b6102e7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a344761219d565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af88608001518960c00151610514565b6102b98888610694565b5047915050818111156102db576102db6000846102d6858561219d565b61081e565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610373344761219d565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104138160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610488576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104da8a600001518b60c001518b8b3361084f565b60c08b01526104e98a88610694565b504791505081811115610506576105066000846102d6858561219d565b505060009091555050505050565b8060000361054e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105a757803410156105a3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610614573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063891906121d7565b905081811015610683576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61068f83333085610992565b505050565b6106c782608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610bac565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff1660001b8760e0015187600001602081019061074891906121f0565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4016000604051808303818588803b1580156107ca57600080fd5b505af11580156107de573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108129190612280565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108455761068f838383610ce3565b61068f8282610e65565b60008280820361088b576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561089a60018561219d565b8181106108a9576108a9612393565b90506020028101906108bb91906123c2565b6108cc9060808101906060016121f0565b905060006108d982610f8f565b905073ffffffffffffffffffffffffffffffffffffffff821661090357610900348261219d565b90505b600061090f8888611048565b905061091b8888611154565b6109288a898989856111c1565b60008261093485610f8f565b61093e919061219d565b905089811015610984576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161067a565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109df576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a2c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac191906121d7565b9050610acf82868686611573565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6391906121d7565b610b6d919061219d565b14610ba4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bcc57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c19576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb291906121d7565b101561068f5761068f83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61164f565b73ffffffffffffffffffffffffffffffffffffffff8316610d30576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d7d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0e91906121d7565b905080821115610e54576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b610e5f84848461173f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610eb2576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ef5576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f4f576040519150601f19603f3d011682016040523d82523d6000602084013e610f54565b606091505b505090508061068f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611040576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611017573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103b91906121d7565b611042565b475b92915050565b60608160008167ffffffffffffffff81111561106657611066611e5c565b60405190808252806020026020018201604052801561108f578160200160208202803683370190505b5090506000805b83811015611149578686828181106110b0576110b0612393565b90506020028101906110c291906123c2565b6110d39060808101906060016121f0565b91506110de82610f8f565b8382815181106110f0576110f0612393565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611141573483828151811061112957611129612393565b6020026020010181815161113d919061219d565b9052505b600101611096565b509095945050505050565b60005b8181101561068f573683838381811061117257611172612393565b905060200281019061118491906123c2565b905061119660e0820160c08301612400565b156111b8576111b86111ae60608301604084016121f0565b8260800135610514565b50600101611157565b83838383826001811461148e57600085856111dd60018561219d565b8181106111ec576111ec612393565b90506020028101906111fe91906123c2565b61120f9060808101906060016121f0565b9050600089815b818110156113ba57368d8d8381811061123157611231612393565b905060200281019061124391906123c2565b905061127261125860608301604084016121f0565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112d557506112d561128b60408301602084016121f0565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112ec57506112ec61128b60208301836121f0565b8015611371575061137161130360a083018361241d565b61131291600491600091612489565b61131b916124b3565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6113a7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113b18f82611795565b50600101611216565b505060005b6113ca60018561219d565b8110156114865760008888838181106113e5576113e5612393565b90506020028101906113f791906123c2565b6114089060808101906060016121f0565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461147d5785828151811061144f5761144f612393565b602002602001015161146082610f8f565b61146a919061219d565b9250821561147d5761147d81888561081e565b506001016113bf565b505050611567565b8760005b8181101561156457368b8b838181106114ad576114ad612393565b90506020028101906114bf91906123c2565b90506114d461125860608301604084016121f0565b806114ed57506114ed61128b60408301602084016121f0565b8015611504575061150461128b60208301836121f0565b801561151b575061151b61130360a083018361241d565b611551576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61155b8d82611795565b50600101611492565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e5f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a73565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526116db8482611b82565b610e5f5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526117359085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115cd565b610e5f8482611a73565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261068f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115cd565b6117ab6117a560208301836121f0565b3b151590565b6117e1576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611821576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061183661125860608501604086016121f0565b611841576000611847565b82608001355b9050600061186361185e60608601604087016121f0565b610f8f565b9050600061187a61185e60808701606088016121f0565b9050826000036118b1576118b161189760608701604088016121f0565b6118a760408801602089016121f0565b8760800135610bac565b84608001358210156118fc576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b60008061190c60208801886121f0565b73ffffffffffffffffffffffffffffffffffffffff168561193060a08a018a61241d565b60405161193e9291906124fb565b60006040518083038185875af1925050503d806000811461197b576040519150601f19603f3d011682016040523d82523d6000602084013e611980565b606091505b5091509150816119935761199381611c43565b60006119a861185e60808a0160608b016121f0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119d960208b018b6121f0565b6119e960608c0160408d016121f0565b6119f960808d0160608e016121f0565b8c60800135898711611a0b5786611a15565b611a158a8861219d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ad5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c4d9092919063ffffffff16565b9050805160001480611af6575080806020019051810190611af6919061250b565b61068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067a565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611bac9190612528565b6000604051808303816000865af19150503d8060008114611be9576040519150601f19603f3d011682016040523d82523d6000602084013e611bee565b606091505b5091509150818015611c18575080511580611c18575080806020019051810190611c18919061250b565b8015611c3a575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611c5c8484600085611c64565b949350505050565b606082471015611cf6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611d1f9190612528565b60006040518083038185875af1925050503d8060008114611d5c576040519150601f19603f3d011682016040523d82523d6000602084013e611d61565b606091505b5091509150611d7287838387611d7d565b979650505050505050565b60608315611e13578251600003611e0c5773ffffffffffffffffffffffffffffffffffffffff85163b611e0c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067a565b5081611c5c565b611c5c8383815115611e285781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a919061253a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611eaf57611eaf611e5c565b60405290565b600082601f830112611ec657600080fd5b813567ffffffffffffffff80821115611ee157611ee1611e5c565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611f2757611f27611e5c565b81604052838152866020858801011115611f4057600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f8457600080fd5b919050565b8015158114611f9757600080fd5b50565b8035611f8481611f89565b60006101408284031215611fb857600080fd5b611fc0611e8b565b905081358152602082013567ffffffffffffffff80821115611fe157600080fd5b611fed85838601611eb5565b6020840152604084013591508082111561200657600080fd5b5061201384828501611eb5565b60408301525061202560608301611f60565b606082015261203660808301611f60565b608082015261204760a08301611f60565b60a082015260c082013560c082015260e082013560e082015261010061206e818401611f9a565b90820152610120612080838201611f9a565b9082015292915050565b60006040828403121561209c57600080fd5b50919050565b600080606083850312156120b557600080fd5b823567ffffffffffffffff8111156120cc57600080fd5b6120d885828601611fa5565b9250506120e8846020850161208a565b90509250929050565b6000806000806080858703121561210757600080fd5b843567ffffffffffffffff8082111561211f57600080fd5b61212b88838901611fa5565b9550602087013591508082111561214157600080fd5b818701915087601f83011261215557600080fd5b81358181111561216457600080fd5b8860208260051b850101111561217957600080fd5b602083019550809450505050612192866040870161208a565b905092959194509250565b81810381811115611042577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156121e957600080fd5b5051919050565b60006020828403121561220257600080fd5b61220b82611f60565b9392505050565b60005b8381101561222d578181015183820152602001612215565b50506000910152565b6000815180845261224e816020860160208601612212565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526122a9610160850183612236565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526122e48382612236565b925050606085015161230e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123818187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126123f657600080fd5b9190910192915050565b60006020828403121561241257600080fd5b813561220b81611f89565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261245257600080fd5b83018035915067ffffffffffffffff82111561246d57600080fd5b60200191503681900382131561248257600080fd5b9250929050565b6000808585111561249957600080fd5b838611156124a657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124f35780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561251d57600080fd5b815161220b81611f89565b600082516123f6818460208701612212565b60208152600061220b602083018461223656fea264697066735822122029477d9afbc289daca4448130d6eed952191920709d2576041d07f34e8048b4264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_airlift";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "airlift";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refund";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refund";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
    static createInterface(): GlacisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GlacisFacet;
}
export {};
