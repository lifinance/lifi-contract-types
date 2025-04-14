import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OmniBridgeFacet, OmniBridgeFacetInterface } from "../OmniBridgeFacet";
declare type OmniBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OmniBridgeFacet__factory extends ContractFactory {
    constructor(...args: OmniBridgeFacetConstructorParams);
    deploy(_foreignOmniBridge: PromiseOrValue<string>, _wethOmniBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OmniBridgeFacet>;
    getDeployTransaction(_foreignOmniBridge: PromiseOrValue<string>, _wethOmniBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OmniBridgeFacet;
    connect(signer: Signer): OmniBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801562000010575f80fd5b506040516200258738038062002587833981016040819052620000339162000067565b6001600160a01b039182166080521660a0526200009d565b80516001600160a01b038116811462000062575f80fd5b919050565b5f806040838503121562000079575f80fd5b62000084836200004b565b915062000094602084016200004b565b90509250929050565b60805160a0516124c1620000c65f395f61068701525f81816106f0015261077a01526124c15ff3fe608060405260043610610028575f3560e01c8063782621d81461002c5780639572678214610041575b5f80fd5b61003f61003a366004612033565b610054565b005b61003f61004f366004612065565b610277565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df34476120f7565b9050838061010001511561011f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561015d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101808160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610231576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024387608001518860c0015161049d565b61024c87610619565b50479150508181111561026d5761026d5f8461026885856120f7565b61080e565b50505f9091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030234476120f7565b905085806101000151610341576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561037f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610467895f01518a60c001518a8a3361083f565b60c08a015261047589610619565b504791505081811115610491576104915f8461026885856120f7565b50505f90915550505050565b805f036104d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661052f578034101561052b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610599573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105bd919061212f565b905081811015610608576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106148333308561097d565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff166106e65760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024015f604051808303818588803b1580156106ca575f80fd5b505af11580156106dc573d5f803e3d5ffd5b50505050506107d4565b61071981608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610b92565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd1906064015f604051808303815f87803b1580156107bd575f80fd5b505af11580156107cf573d5f803e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161080391906121b1565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561083557610614838383610cc7565b6106148282610e46565b5f8280820361087a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856108886001856120f7565b818110610897576108976122c3565b90506020028101906108a991906122f0565b6108ba90608081019060600161232c565b90505f6108c682610f6c565b905073ffffffffffffffffffffffffffffffffffffffff82166108f0576108ed34826120f7565b90505b5f6108fb8888611022565b9050610907888861112c565b6109148a89898985611198565b5f8261091f85610f6c565b61092991906120f7565b90508981101561096f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016105ff565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109ca576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a17576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa158015610a85573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aa9919061212f565b9050610ab782868686611542565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b25573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b49919061212f565b610b5391906120f7565b14610b8a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bb257505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bff576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c72573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c96919061212f565b10156106145761061483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61161e565b73ffffffffffffffffffffffffffffffffffffffff8316610d14576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d61576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dcb573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610def919061212f565b905080821115610e35576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105ff565b610e4084848461170d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e93576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ed6576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105ff565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114610f2c576040519150601f19603f3d011682016040523d82523d5f602084013e610f31565b606091505b5050905080610614576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff82161561101a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ff1573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611015919061212f565b61101c565b475b92915050565b6060815f8167ffffffffffffffff81111561103f5761103f611e11565b604051908082528060200260200182016040528015611068578160200160208202803683370190505b5090505f805b8381101561112157868682818110611088576110886122c3565b905060200281019061109a91906122f0565b6110ab90608081019060600161232c565b91506110b682610f6c565b8382815181106110c8576110c86122c3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166111195734838281518110611101576111016122c3565b6020026020010181815161111591906120f7565b9052505b60010161106e565b509095945050505050565b5f5b818110156106145736838383818110611149576111496122c3565b905060200281019061115b91906122f0565b905061116d60e0820160c0830161234c565b1561118f5761118f611185606083016040840161232c565b826080013561049d565b5060010161112e565b83838383826001811461145e575f85856111b36001856120f7565b8181106111c2576111c26122c3565b90506020028101906111d491906122f0565b6111e590608081019060600161232c565b90505f89815b8181101561138c57368d8d83818110611206576112066122c3565b905060200281019061121891906122f0565b905061124761122d606083016040840161232c565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112a957506112a9611260604083016020840161232c565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112c057506112c0611260602083018361232c565b801561134357506113436112d760a0830183612367565b6112e5916004915f916123cf565b6112ee916123f6565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611379576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113838f82611763565b506001016111eb565b50505f5b61139b6001856120f7565b811015611456575f8888838181106113b5576113b56122c3565b90506020028101906113c791906122f0565b6113d890608081019060600161232c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461144d5785828151811061141f5761141f6122c3565b602002602001015161143082610f6c565b61143a91906120f7565b9250821561144d5761144d81888561080e565b50600101611390565b505050611536565b875f5b8181101561153357368b8b8381811061147c5761147c6122c3565b905060200281019061148e91906122f0565b90506114a361122d606083016040840161232c565b806114bc57506114bc611260604083016020840161232c565b80156114d357506114d3611260602083018361232c565b80156114ea57506114ea6112d760a0830183612367565b611520576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61152a8d82611763565b50600101611461565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e409085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a36565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526116aa8482611b43565b610e405760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f60448201526117039085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161159c565b610e408482611a36565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106149084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161159c565b611779611773602083018361232c565b3b151590565b6117af576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036117ee576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61180261122d606085016040860161232c565b61180c575f611812565b82608001355b90505f61182d611828606086016040870161232c565b610f6c565b90505f611843611828608087016060880161232c565b9050825f036118795761187961185f606087016040880161232c565b61186f604088016020890161232c565b8760800135610b92565b84608001358210156118c4576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105ff565b5f806118d3602088018861232c565b73ffffffffffffffffffffffffffffffffffffffff16856118f760a08a018a612367565b60405161190592919061243e565b5f6040518083038185875af1925050503d805f811461193f576040519150601f19603f3d011682016040523d82523d5f602084013e611944565b606091505b5091509150816119575761195781611bfe565b5f61196b61182860808a0160608b0161232c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961199c60208b018b61232c565b6119ac60608c0160408d0161232c565b6119bc60808d0160608e0161232c565b8c608001358987116119ce57866119d8565b6119d88a886120f7565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b5f611a97826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c089092919063ffffffff16565b905080515f1480611ab7575080806020019051810190611ab7919061244d565b610614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105ff565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611b6b9190612468565b5f604051808303815f865af19150503d805f8114611ba4576040519150601f19603f3d011682016040523d82523d5f602084013e611ba9565b606091505b5091509150818015611bd3575080511580611bd3575080806020019051810190611bd3919061244d565b8015611bf5575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611c1684845f85611c1e565b949350505050565b606082471015611cb0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105ff565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611cd89190612468565b5f6040518083038185875af1925050503d805f8114611d12576040519150601f19603f3d011682016040523d82523d5f602084013e611d17565b606091505b5091509150611d2887838387611d33565b979650505050505050565b60608315611dc85782515f03611dc15773ffffffffffffffffffffffffffffffffffffffff85163b611dc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105ff565b5081611c16565b611c168383815115611ddd5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ff9190612479565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e6257611e62611e11565b60405290565b5f82601f830112611e77575f80fd5b813567ffffffffffffffff80821115611e9257611e92611e11565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ed857611ed8611e11565b81604052838152866020858801011115611ef0575f80fd5b836020870160208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f32575f80fd5b919050565b8015158114611f44575f80fd5b50565b8035611f3281611f37565b5f6101408284031215611f63575f80fd5b611f6b611e3e565b905081358152602082013567ffffffffffffffff80821115611f8b575f80fd5b611f9785838601611e68565b60208401526040840135915080821115611faf575f80fd5b50611fbc84828501611e68565b604083015250611fce60608301611f0f565b6060820152611fdf60808301611f0f565b6080820152611ff060a08301611f0f565b60a082015260c082013560c082015260e082013560e0820152610100612017818401611f47565b90820152610120612029838201611f47565b9082015292915050565b5f60208284031215612043575f80fd5b813567ffffffffffffffff811115612059575f80fd5b611c1684828501611f52565b5f805f60408486031215612077575f80fd5b833567ffffffffffffffff8082111561208e575f80fd5b61209a87838801611f52565b945060208601359150808211156120af575f80fd5b818601915086601f8301126120c2575f80fd5b8135818111156120d0575f80fd5b8760208260051b85010111156120e4575f80fd5b6020830194508093505050509250925092565b8181038181111561101c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6020828403121561213f575f80fd5b5051919050565b5f5b83811015612160578181015183820152602001612148565b50505f910152565b5f815180845261217f816020860160208601612146565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201525f60208301516101408060408501526121d9610160850183612168565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526122148382612168565b925050606085015161223e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206122b18187018315159052565b90950151151593019290925250919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612322575f80fd5b9190910192915050565b5f6020828403121561233c575f80fd5b61234582611f0f565b9392505050565b5f6020828403121561235c575f80fd5b813561234581611f37565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261239a575f80fd5b83018035915067ffffffffffffffff8211156123b4575f80fd5b6020019150368190038213156123c8575f80fd5b9250929050565b5f80858511156123dd575f80fd5b838611156123e9575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124365780818660040360031b1b83161692505b505092915050565b818382375f9101908152919050565b5f6020828403121561245d575f80fd5b815161234581611f37565b5f8251612322818460208701612146565b602081525f612345602083018461216856fea26469706673582212209af0f6d1373516db8c8158f13ffd0c9896dd9a629dbffc8d25fea8c10537eccd64736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_foreignOmniBridge";
            readonly type: "address";
            readonly internalType: "contract IOmniBridge";
        }, {
            readonly name: "_wethOmniBridge";
            readonly type: "address";
            readonly internalType: "contract IOmniBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaOmniBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaOmniBridge";
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
    static createInterface(): OmniBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OmniBridgeFacet;
}
export {};
