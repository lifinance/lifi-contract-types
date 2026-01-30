import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV4, AcrossFacetV4Interface } from "../AcrossFacetV4";
type AcrossFacetV4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV4__factory extends ContractFactory {
    constructor(...args: AcrossFacetV4ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV4>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV4;
    connect(signer: Signer): AcrossFacetV4__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620022fc380380620022fc83398101604081905262000034916200007f565b6001600160a01b038216158062000049575080155b1562000068576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0390911660805260a052620000bb565b600080604083850312156200009357600080fd5b82516001600160a01b0381168114620000ab57600080fd5b6020939093015192949293505050565b60805160a051612200620000fc6000396000818160a40152610948015260008181610105015281816108fd015281816109fb0152610a2601526122006000f3fe6080604052600436106100655760003560e01c8063e796cd9811610043578063e796cd98146100d9578063f6503992146100f3578063f97136af1461014c57600080fd5b80631794958f1461006a578063a1f1ce431461007f578063d999984d14610092575b600080fd5b61007d610078366004611b1e565b610168565b005b61007d61008d366004611bdd565b6103b2565b34801561009e57600080fd5b506100c67f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100e557600080fd5b506100c6651f2abb7bf89b81565b3480156100ff57600080fd5b506101277f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d0565b34801561015857600080fd5b506100c6670de0b6b3a764000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101e3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101f43447611c70565b905086806101000151610233576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102568160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561028d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102cb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610308576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031d89600001518a60c001518a8a3361059f565b60c08a0152600061032d87611cb7565b9050670de0b6b3a764000061034860c0890160a08a01611d84565b6fffffffffffffffffffffffffffffffff168b60c001516103699190611da6565b6103739190611dbd565b60808201526103828a826106e6565b5047915050818111156103a4576103a460008461039f8585611c70565b610b31565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161042d576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061043e3447611c70565b9050846104638160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104d8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610515576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610553576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056587608001518860c00151610b66565b6105778761057288611cb7565b6106e6565b50479050818111156105935761059360008461039f8585611c70565b50506000909155505050565b6000828082036105db576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105ea600185611c70565b8181106105f9576105f9611df8565b905060200281019061060b9190611e27565b61061c906080810190606001611e65565b9050600061062982610c1b565b905073ffffffffffffffffffffffffffffffffffffffff8216610653576106503482611c70565b90505b600061065f8888610c66565b905061066b8888610d7a565b6106788a89898985610de7565b60008261068485610c1b565b61068e9190611c70565b9050898110156106d8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b6101208201516101408201515115159015151461072f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061073e8360e00151611034565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036108045781516107c3576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a36108a1565b8261012001511580156108325750815160a084015173ffffffffffffffffffffffffffffffffffffffff1614155b15610869576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81516108a1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208201516108dc576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff166109f1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68460c00151846020015185600001517f000000000000000000000000000000000000000000000000000000000000000087606001518960c001518960800151898b60c001518c60e001518d61010001518e61012001518f61014001516040518e63ffffffff1660e01b81526004016109ba9c9b9a99989796959493929190611ee4565b6000604051808303818588803b1580156109d357600080fd5b505af11580156109e7573d6000803e3d6000fd5b5050505050610af5565b610a2483608001517f00000000000000000000000000000000000000000000000000000000000000008560c0015161105a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c683602001518460000151856040015186606001518860c001518860800151888a60c001518b60e001518c61010001518d61012001518e61014001516040518d63ffffffff1660e01b8152600401610ac29c9b9a99989796959493929190611ee4565b600060405180830381600087803b158015610adc57600080fd5b505af1158015610af0573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b249190611f5d565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b5b57610b568282611086565b505050565b610b568383836110f3565b80600003610ba0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bf95780341015610bf5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bf573ffffffffffffffffffffffffffffffffffffffff8316333084611161565b600073ffffffffffffffffffffffffffffffffffffffff821615610c5e57610c5973ffffffffffffffffffffffffffffffffffffffff8316306111be565b610c60565b475b92915050565b60608160008167ffffffffffffffff811115610c8457610c846118c4565b604051908082528060200260200182016040528015610cad578160200160208202803683370190505b5090506000805b83811015610d6f57868682818110610cce57610cce611df8565b9050602002810190610ce09190611e27565b610cf1906080810190606001611e65565b9150610cfc82610c1b565b838281518110610d0e57610d0e611df8565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d5f5734838281518110610d4757610d47611df8565b60200260200101818151610d5b9190611c70565b9052505b610d6881612070565b9050610cb4565b509095945050505050565b60005b81811015610b565736838383818110610d9857610d98611df8565b9050602002810190610daa9190611e27565b9050610dbc60e0820160c083016120a8565b15610dde57610dde610dd46060830160408401611e65565b8260800135610b66565b50600101610d7d565b8383838382600080805b8381101561101757368c8c83818110610e0c57610e0c611df8565b9050602002810190610e1e9190611e27565b9050610e2d6020820182611e65565b9350610e3f6040820160208301611e65565b9250610ee484610e5260a08401846120c3565b610e619160049160009161212f565b610e6a91612159565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610fcd5750610f18610efe6060830160408401611e65565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610f5157508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610fcd575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611004576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61100e8e826111f3565b50600101610df1565b50505050611029848484846000611470565b505050505050505050565b6000660416edef1601be82036110515750651f2abb7bf89b919050565b5090565b919050565b610b568383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611696565b73ffffffffffffffffffffffffffffffffffffffff82166110d3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bf573ffffffffffffffffffffffffffffffffffffffff8316826117c5565b73ffffffffffffffffffffffffffffffffffffffff8216611140576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b5673ffffffffffffffffffffffffffffffffffffffff841683836117e1565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166111b057637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61120b6112036020830183611e65565b6017903b1190565b611241576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611281576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611296610efe6060850160408601611e65565b6112a15760006112a7565b82608001355b905060006112c36112be6080860160608701611e65565b610c1b565b9050816000036112fa576112fa6112e06060860160408701611e65565b6112f06040870160208801611e65565b866080013561105a565b60008061130a6020870187611e65565b73ffffffffffffffffffffffffffffffffffffffff168461132e60a08901896120c3565b60405161133c9291906121a1565b60006040518083038185875af1925050503d8060008114611379576040519150601f19603f3d011682016040523d82523d6000602084013e61137e565b606091505b5091509150816113915761139181611830565b60006113a66112be6080890160608a01611e65565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886113d760208a018a611e65565b6113e760608b0160408c01611e65565b6113f760808c0160608d01611e65565b8b608001358987116114095786611413565b6114138a88611c70565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b8360008682611480600182611c70565b81811061148f5761148f611df8565b90506020028101906114a19190611e27565b6114b2906080810190606001611e65565b905060008060008060008060005b88811015611686576114d360018a611c70565b811080156114e2575088600114155b156115be578d8d828181106114f9576114f9611df8565b905060200281019061150b9190611e27565b61151c906080810190606001611e65565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146115be578a818151811061156357611563611df8565b602002602001015161157487610c1b565b61157e9190611c70565b965073ffffffffffffffffffffffffffffffffffffffff8616156115a35760006115a5565b895b9350838711156115be576115be868d61039f878b611c70565b8d8d828181106115d0576115d0611df8565b90506020028101906115e29190611e27565b6115f3906060810190604001611e65565b94506115fe85610c1b565b925073ffffffffffffffffffffffffffffffffffffffff851615611623576000611625565b895b9150818311801561166257508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561167657611676858d61039f8587611c70565b61167f81612070565b90506114c0565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156117bf5773ffffffffffffffffffffffffffffffffffffffff83166116ff576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611774573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179891906121b1565b10156117bf576117bf73ffffffffffffffffffffffffffffffffffffffff8516848361183a565b50505050565b60003860003884865af1610bf55763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611826576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166118265760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661182657633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611917576119176118c4565b60405290565b604051610160810167ffffffffffffffff81118282101715611917576119176118c4565b600082601f83011261195257600080fd5b813567ffffffffffffffff8082111561196d5761196d6118c4565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156119b3576119b36118c4565b816040528381528660208588010111156119cc57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461105557600080fd5b8035801515811461105557600080fd5b60006101408284031215611a3357600080fd5b611a3b6118f3565b905081358152602082013567ffffffffffffffff80821115611a5c57600080fd5b611a6885838601611941565b60208401526040840135915080821115611a8157600080fd5b50611a8e84828501611941565b604083015250611aa0606083016119ec565b6060820152611ab1608083016119ec565b6080820152611ac260a083016119ec565b60a082015260c082013560c082015260e082013560e0820152610100611ae9818401611a10565b90820152610120611afb838201611a10565b9082015292915050565b60006101608284031215611b1857600080fd5b50919050565b60008060008060608587031215611b3457600080fd5b843567ffffffffffffffff80821115611b4c57600080fd5b611b5888838901611a20565b95506020870135915080821115611b6e57600080fd5b818701915087601f830112611b8257600080fd5b813581811115611b9157600080fd5b8860208260051b8501011115611ba657600080fd5b602083019550809450506040870135915080821115611bc457600080fd5b50611bd187828801611b05565b91505092959194509250565b60008060408385031215611bf057600080fd5b823567ffffffffffffffff80821115611c0857600080fd5b611c1486838701611a20565b93506020850135915080821115611c2a57600080fd5b50611c3785828601611b05565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c6057610c60611c41565b80356fffffffffffffffffffffffffffffffff8116811461105557600080fd5b803563ffffffff8116811461105557600080fd5b60006101608236031215611cca57600080fd5b611cd261191d565b8235815260208301356020820152604083013560408201526060830135606082015260808301356080820152611d0a60a08401611c83565b60a082015260c083013560c0820152611d2560e08401611ca3565b60e0820152610100611d38818501611ca3565b90820152610120611d4a848201611ca3565b908201526101408381013567ffffffffffffffff811115611d6a57600080fd5b611d7636828701611941565b918301919091525092915050565b600060208284031215611d9657600080fd5b611d9f82611c83565b9392505050565b8082028115828204841417610c6057610c60611c41565b600082611df3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e5b57600080fd5b9190910192915050565b600060208284031215611e7757600080fd5b611d9f826119ec565b6000815180845260005b81811015611ea657602081850181015186830182015201611e8a565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60006101808e83528d60208401528c60408401528b60608401528a60808401528960a08401528860c08401528760e084015263ffffffff8088166101008501528087166101208501528086166101408501525080610160840152611f4a81840185611e80565b9f9e505050505050505050505050505050565b602081528151602082015260006020830151610140806040850152611f86610160850183611e80565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611fc18382611e80565b9250506060850151611feb608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061205e8187018315159052565b90950151151593019290925250919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120a1576120a1611c41565b5060010190565b6000602082840312156120ba57600080fd5b611d9f82611a10565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126120f857600080fd5b83018035915067ffffffffffffffff82111561211357600080fd5b60200191503681900382131561212857600080fd5b9250929050565b6000808585111561213f57600080fd5b8386111561214c57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156121995780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156121c357600080fd5b505191905056fea26469706673582212208cfe38efe0d102216ce9723a0d8f8e6db06b98818b1462f64298a48ba1935e6364736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_CHAIN_ID_SOLANA";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "SPOKEPOOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_NATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV4";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
    }];
    static createInterface(): AcrossFacetV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV4;
}
export {};
